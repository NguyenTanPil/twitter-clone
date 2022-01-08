import { CgMore } from 'react-icons/cg';
import { Avatar } from '../../Common/Avatar';
import {
  Action,
  Body,
  Container,
  Content,
  Footer,
  Header,
  Info,
  Wrap,
  MoreIcon,
  DisplayName,
  UserName,
} from './PostStyles';
import { BiComment } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import { TiArrowSync } from 'react-icons/ti';
import { BiUpload } from 'react-icons/bi';

const getTimeCreated = (createdTime) => {
  const dt = new Date();
  const currentTime = dt.getTime();

  const unix_timestamp = (currentTime - createdTime * 1000) / 1000;
  var days = Math.floor(unix_timestamp / (3600 * 24));
  var hours = Math.floor((unix_timestamp % (3600 * 24)) / 3600);
  var minutes = Math.floor((unix_timestamp % 3600) / 60);
  var seconds = Math.floor(unix_timestamp % 60);

  let result = '';
  if (days > 360) {
    result = `${Math.floor(days / 360)}y`;
  } else if (days > 30) {
    result = `${Math.floor(days / 30)}m`;
  } else if (days > 0) {
    result = `${days}d`;
  } else if (hours > 0) {
    result = `${hours}h`;
  } else if (minutes > 0) {
    result = `${minutes}m`;
  } else {
    result = `${seconds}s`;
  }

  return result;
};

const Post = ({ avatar, createdAt, displayName, image, content, userName }) => {
  return (
    <Container>
      <Avatar>
        <img src={avatar} alt="avt" />
      </Avatar>
      <Wrap>
        <Header>
          <Info>
            <div>
              <DisplayName>{displayName}</DisplayName>
              <UserName>{userName}</UserName>
              <UserName>·</UserName>
              <UserName>{getTimeCreated(createdAt)}</UserName>
            </div>
            <MoreIcon>
              <CgMore />
            </MoreIcon>
          </Info>
          <Content>{content}</Content>
        </Header>
        <Body>
          <img src={image} alt="" />
        </Body>
        <Footer>
          <Action>
            <div>
              <BiComment />
            </div>
            <span>27</span>
          </Action>
          <Action>
            <div>
              <TiArrowSync />
            </div>
            <span>23</span>
          </Action>
          <Action>
            <div>
              <AiOutlineHeart />
            </div>
            <span>23</span>
          </Action>
          <Action>
            <div>
              <BiUpload />
            </div>
          </Action>
        </Footer>
      </Wrap>
    </Container>
  );
};

export default Post;
