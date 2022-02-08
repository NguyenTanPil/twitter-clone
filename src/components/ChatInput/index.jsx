import { Container, Form, SendAction } from './ChatInputStyles';
import { Options, OptionWrap, Option, Input } from '../TweetBox/TweetBoxStyles';
import TextareaAutosize from 'react-textarea-autosize';
import { RiImageLine } from 'react-icons/ri';
import { BiGift, BiMoviePlay, BiSend } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';

const ChatInput = () => {
  return (
    <Container>
      <Form>
        <Options>
          <OptionWrap>
            <Option>
              <div htmlFor="upload-image" title="Image">
                <RiImageLine />
                <input
                  id="upload-image"
                  type="file"
                  accept="image/jpeg,image/png,image/webp,image/gif"
                />
              </div>
            </Option>
            <Option>
              <div title="GIF">
                <BiGift />
              </div>
            </Option>
            <Option>
              <div htmlFor="upload-video" title="Video">
                <BiMoviePlay />
                <input
                  id="upload-video"
                  type="file"
                  accept="video/mp4,video/x-m4v,video/*"
                />
              </div>
            </Option>
            <Option>
              <div title="Emoji">
                <BsEmojiSmile />
              </div>
            </Option>
          </OptionWrap>
        </Options>

        <Input>
          <TextareaAutosize autoFocus placeholder="Type a message..." />
          <SendAction>
            <BiSend />
          </SendAction>
        </Input>
      </Form>
    </Container>
  );
};

export default ChatInput;
