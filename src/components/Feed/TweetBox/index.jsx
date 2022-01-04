import {
  Container,
  Avatar,
  Form,
  Input,
  Options,
  OptionWrap,
  OptionSubmit,
  Option,
} from './TweetBoxStyles';
import { SubmitButton } from '../../Common/Button';
import { CgPoll } from 'react-icons/cg';
import { BiGift } from 'react-icons/bi';
import { RiImageLine } from 'react-icons/ri';
import { BsEmojiSmile } from 'react-icons/bs';
import { AiOutlineSchedule } from 'react-icons/ai';
import { HiOutlineLocationMarker } from 'react-icons/hi';

const TweetBox = () => {
  return (
    <Container>
      <Avatar>
        <img
          src="https://pbs.twimg.com/profile_images/1477919658590146560/bQxLDkoP_400x400.png"
          alt="avt"
        />
      </Avatar>
      <Form>
        <Input>
          <input type="text" placeholder="What's happening?" />
        </Input>
        <Options>
          <OptionWrap>
            <Option>
              <RiImageLine />
            </Option>
            <Option>
              <BiGift />
            </Option>
            <Option>
              <CgPoll />
            </Option>
            <Option>
              <BsEmojiSmile />
            </Option>
            <Option>
              <AiOutlineSchedule />
            </Option>
            <Option>
              <HiOutlineLocationMarker />
            </Option>
          </OptionWrap>
          <OptionSubmit>
            <SubmitButton>Tweet</SubmitButton>
          </OptionSubmit>
        </Options>
      </Form>
    </Container>
  );
};

export default TweetBox;
