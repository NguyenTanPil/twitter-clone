import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineSchedule } from 'react-icons/ai';
import { BiGift } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { BiMoviePlay } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { RiImageLine } from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../../../features/posts/postsSlice';
import { selectUser } from '../../../features/user/userSlice';
import db from '../../../firebase';
import { Avatar } from '../../Common/Avatar';
import { SubmitButton } from '../../Common/Button';
import EmojiModel from '../../EmojiModel';
import GifModel from '../../GifModel';
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
  const [media, setMedia] = useState();
  const [loading, setLoading] = useState(false);
  const [showGifModel, setShowGifModel] = useState(false);
  const [showEmojiModel, setShowEmojiModel] = useState(false);
  const [option, setOption] = useState('');

  const handlePreviewMedia = (e, type) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    try {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setMedia(reader.result);
          if (type === 'image') {
            setOption('image');
          } else {
            setOption('video');
          }
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      setMedia('');
    }
  };

  const handlePost = async () => {
    // Reset tweetbox
    setPostContent('');
    setMedia('');
    setLoading(true);
    setOption('');

    // Upload image to cloudinary
    const typeUpload = option === 'video' ? 'video' : 'image';
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/${typeUpload}/upload`;

    // Create form data
    const data = new FormData();
    data.append('file', media);
    data.append(
      'upload_preset',
      process.env.REACT_APP_CLOUDINARY_UNSIGNED_UPLOAD_PRESET,
    );

    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    // Response media url from cloudinary
    const fileRes = await res.json();
    const mediaUrl = fileRes.secure_url;

    // Add post to firebase store
    const dt = new Date();
    const createdAt = dt.getTime();
    const post = {
      avatar: user.avatar,
      content: postContent,
      displayName: user.name,
      image: mediaUrl,
      userName: `@${user.name}`,
      verified: false,
      createdAt: createdAt,
      type: option,
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

  const handleChosenGif = (gif) => {
    setShowGifModel(false);
    setMedia(gif);
    setOption('gif');
  };

  const handleClosePreview = () => {
    setMedia('');
    setOption('');
  };

  const handleShowGifModel = () => {
    if (option === 'gif' || option === '') {
      setShowGifModel(true);
    }
    return;
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
        {media && (
          <Preview>
            <CloseButton onClick={handleClosePreview}>
              <AiOutlineClose />
            </CloseButton>
            {option === 'image' ? (
              <img src={media} alt="" />
            ) : (
              <video autoPlay muted loop>
                <source src={media} type="video/mp4" />
              </video>
            )}
          </Preview>
        )}
        <Options>
          <OptionWrap>
            <Option disabled={option === 'image' || option === '' ? 0 : 1}>
              <div htmlFor="upload-image" title="Image">
                <RiImageLine />
                <input
                  id="upload-image"
                  type="file"
                  disabled={
                    option === 'image' || option === '' ? '' : 'disabled'
                  }
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={(e) => handlePreviewMedia(e, 'image')}
                />
              </div>
            </Option>
            <Option disabled={option === 'gif' || option === '' ? 0 : 1}>
              <div title="GIF" onClick={handleShowGifModel}>
                <BiGift />
              </div>
              {/* Gif model */}
              {showGifModel && (
                <GifModel
                  setShowGifModel={setShowGifModel}
                  handleChosenGif={handleChosenGif}
                />
              )}
            </Option>
            <Option disabled={option === 'video' || option === '' ? 0 : 1}>
              <div htmlFor="upload-video" title="Video">
                <BiMoviePlay />
                <input
                  id="upload-video"
                  type="file"
                  disabled={
                    option === 'video' || option === '' ? '' : 'disabled'
                  }
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={(e) => handlePreviewMedia(e, 'video')}
                />
              </div>
            </Option>
            <Option>
              <div title="Emoji" onClick={() => setShowEmojiModel(true)}>
                <BsEmojiSmile />
              </div>
              {/* Emoji model */}
              {showEmojiModel && (
                <EmojiModel
                  setShowEmojiModel={setShowEmojiModel}
                  setPostContent={setPostContent}
                />
              )}
            </Option>
            <Option>
              <div title="Schedule">
                <AiOutlineSchedule />
              </div>
            </Option>
            <Option>
              <div title="Location">
                <HiOutlineLocationMarker />
              </div>
            </Option>
          </OptionWrap>
          <OptionSubmit disabled={postContent || media ? 0 : 1}>
            <SubmitButton
              disabled={postContent || media ? false : true}
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
