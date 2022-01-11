import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSchedule } from 'react-icons/ai';
import { BiGift } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { CgPoll } from 'react-icons/cg';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiImageLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../features/posts/postsSlice';
import { selectUser } from '../../../features/user/userSlice';
import db from '../../../firebase';
import { Avatar } from '../../Common/Avatar';
import { SubmitButton } from '../../Common/Button';
import loadingNewPostImg from '../loading-post-item.gif';
import {
  CloseButton,
  Container,
  Form,
  Input,
  LoadingNewPost,
  Option,
  Options,
  OptionSubmit,
  OptionWrap,
  Preview,
} from './TweetBoxStyles';

const TweetBox = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [postContent, setPostContent] = useState('');
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

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
    const post = {
      avatar: user.avatar,
      content: postContent,
      displayName: user.name,
      image: imageUrl,
      userName: `@${user.name}`,
      verified: false,
      createdAt: createdAt,
    };
    const docRef = await addDoc(collection(db, 'posts'), post);
    const id = docRef.id;

    dispatch(
      addPost({
        post: {
          ...post,
          id,
        },
      }),
    );

    // unshow loading
    setLoading(false);
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
                accept="image/jpeg,image/png,image/webp,image/gif"
                onChange={handlePreviewImage}
              />
            </Option>
            <Option title="GIF" disabled={image ? 1 : 0}>
              <BiGift />
            </Option>
            <Option title="Poll" disabled={image ? 1 : 0}>
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
          <OptionSubmit disabled={postContent || image ? 0 : 1}>
            <SubmitButton
              disabled={postContent || image ? false : true}
              onClick={handlePost}
            >
              Tweet
            </SubmitButton>
          </OptionSubmit>
        </Options>
      </Form>
      <LoadingNewPost loading={loading ? 1 : 0}>
        <div>
          <img src={loadingNewPostImg} alt="" />
        </div>
      </LoadingNewPost>
    </Container>
  );
};

export default TweetBox;
