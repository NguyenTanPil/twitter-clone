import { useState, useImperativeHandle, useRef, forwardRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { BiGift, BiMoviePlay } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiImageLine } from 'react-icons/ri';
import { Avatar } from '../Common/Avatar';
import { SubmitButton } from '../Common/Button';
import EmojiModel from '../EmojiModel';
import GifModel from '../GifModel';
import loadingNewPostImg from '../../assets/loading-post-item.gif';
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
  ReplyTo,
} from './TweetBoxStyles';
import { RiCloseFill } from 'react-icons/ri';

const TweetBox = ({ avatar, contentBtn, handleSubmit }, ref) => {
  const [postContent, setPostContent] = useState('');
  const [media, setMedia] = useState('');
  const [loading, setLoading] = useState(false);
  const [showGifModel, setShowGifModel] = useState(false);
  const [showEmojiModel, setShowEmojiModel] = useState(false);
  const [option, setOption] = useState('text');
  const [replyUser, setReplyUser] = useState('');
  const inputRef = useRef();

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
    setOption('text');
    setReplyUser('');

    let mediaUrl = '';
    if (media) {
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
      mediaUrl = fileRes.secure_url;
    }

    // submit
    const dt = new Date();
    const createdAt = dt.getTime();
    const submitData = {
      content: postContent,
      image: mediaUrl,
      createdAt: createdAt,
      type: option,
    };
    await handleSubmit(submitData);

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
    setOption('text');
  };

  const handleShowGifModel = () => {
    if (option === 'gif' || option === 'text') {
      setShowGifModel(true);
    }
    return;
  };

  const handleCloseReply = () => {
    inputRef.current.focus();
    setReplyUser('');
  };

  useImperativeHandle(ref, () => ({
    focus(userName) {
      inputRef.current.focus();
      setReplyUser(userName);
    },
  }));

  return (
    <Container>
      <Avatar>
        <img src={avatar} alt="avt" />
      </Avatar>
      <Form>
        <Input>
          {replyUser && (
            <ReplyTo>
              <div>
                <span>Reply to</span>
                <span>{replyUser}</span>
                <span onClick={handleCloseReply}>
                  <RiCloseFill />
                </span>
              </div>
            </ReplyTo>
          )}
          <input
            type="text"
            placeholder="What's happening?"
            value={postContent}
            ref={inputRef}
            onChange={(e) => setPostContent(e.target.value)}
          />
        </Input>
        {media && (
          <Preview>
            <CloseButton onClick={handleClosePreview}>
              <AiOutlineClose />
            </CloseButton>
            {option === 'video' ? (
              <video autoPlay muted loop>
                <source src={media} type="video/mp4" />
              </video>
            ) : (
              <img src={media} alt="" />
            )}
          </Preview>
        )}
        <Options>
          <OptionWrap>
            <Option disabled={option === 'image' || option === 'text' ? 0 : 1}>
              <div htmlFor="upload-image" title="Image">
                <RiImageLine />
                <input
                  id="upload-image"
                  type="file"
                  disabled={
                    option === 'image' || option === 'text' ? '' : 'disabled'
                  }
                  accept="image/jpeg,image/png,image/webp,image/gif"
                  onChange={(e) => handlePreviewMedia(e, 'image')}
                />
              </div>
            </Option>
            <Option disabled={option === 'gif' || option === 'text' ? 0 : 1}>
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
            <Option disabled={option === 'video' || option === 'text' ? 0 : 1}>
              <div htmlFor="upload-video" title="Video">
                <BiMoviePlay />
                <input
                  id="upload-video"
                  type="file"
                  disabled={
                    option === 'video' || option === 'text' ? '' : 'disabled'
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
          </OptionWrap>
          <OptionSubmit disabled={postContent || media ? 0 : 1}>
            <SubmitButton
              disabled={postContent || media ? 0 : 1}
              onClick={handlePost}
            >
              {contentBtn}
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

export default forwardRef(TweetBox);
