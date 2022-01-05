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

const Post = ({ avartar, displayName, image, text, userName }) => {
  return (
    <Container>
      <Avatar>
        <img src={avartar} alt="avt" />
      </Avatar>
      <Wrap>
        <Header>
          <Info>
            <div>
              <DisplayName>{displayName}</DisplayName>
              <UserName>{userName}</UserName>
              <UserName>·</UserName>
              <UserName>18h</UserName>
            </div>
            <MoreIcon>
              <CgMore />
            </MoreIcon>
          </Info>
          <Content>{text}</Content>
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
