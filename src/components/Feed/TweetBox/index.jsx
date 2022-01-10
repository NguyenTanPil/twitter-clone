import {
  Container,
  Form,
  Input,
  Options,
  OptionWrap,
  OptionSubmit,
  Option,
  Preview,
  CloseButton,
} from './TweetBoxStyles';
import { SubmitButton } from '../../Common/Button';
import { CgPoll } from 'react-icons/cg';
import { BiGift } from 'react-icons/bi';
import { RiImageLine } from 'react-icons/ri';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSchedule, AiOutlineClose } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { Avatar } from '../../Common/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';
import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from '../../../firebase';

const TweetBox = () => {
  const user = useSelector(selectUser);
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState();

  const handlePreviewImage = (e) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    try {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImage(reader.result);
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      setImage('');
    }
  };

  const handlePost = async () => {
    // Reset tweetbox
    setPostContent('');
    setImage('');

    // Upload image to cloudinary
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/upload`;

    // Create form data
    const data = new FormData();
    data.append('file', image);
    data.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UNSIGNED_UPLOAD_PRESET,
    );

    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    // Response image url from cloudinary
    const fileRes = await res.json();
    const imageUrl = fileRes.secure_url;

    // Add post to firebase store
    const dt = new Date();
    const createdAt = dt.getTime();
    const docRef = await addDoc(collection(db, 'posts'), {
      avatar: user.avatar,
      content: postContent,
      displayName: user.name,
      image: imageUrl,
      userName: `@${user.name}`,
      verified: false,
      createdAt: createdAt,
    });

    console.log(docRef);
  };

  return (
    <Container>
      <Avatar>
        <img src={user.avatar} alt="avt" />
      </Avatar>
      <Form>
        <Input>
          <input
            type="text"
            placeholder="What's happening?"
            accept="image/jpeg,image/png,image/webp,image/gif"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Input>
        {image && (
          <Preview>
            <CloseButton onClick={() => setImage('')}>
              <AiOutlineClose />
            </CloseButton>
            <img src={image} alt="" />
          </Preview>
        )}
        <Options>
          <OptionWrap>
            <Option htmlFor="upload-image" title="Media">
              <RiImageLine />
              <input
                id="upload-image"
                type="file"
                onChange={handlePreviewImage}
              />
            </Option>
            <Option title="GIF">
              <BiGift />
            </Option>
            <Option title="Poll">
              <CgPoll />
            </Option>
            <Option title="Emoji">
              <BsEmojiSmile />
            </Option>
            <Option title="Schedule">
              <AiOutlineSchedule />
            </Option>
            <Option title="Location">
              <HiOutlineLocationMarker />
            </Option>
          </OptionWrap>
          <OptionSubmit>
            <SubmitButton onClick={handlePost}>Tweet</SubmitButton>
          </OptionSubmit>
        </Options>
      </Form>
    </Container>
  );
};

export default TweetBox;
