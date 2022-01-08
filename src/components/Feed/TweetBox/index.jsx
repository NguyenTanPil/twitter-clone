import {
  Container,
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
import { Avatar } from '../../Common/Avatar';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';

const TweetBox = () => {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Avatar>
        <img src={user.avatar} alt="avt" />
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
