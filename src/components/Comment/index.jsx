import formatCreatedAt from '../../Utils/formatCreatedAt';
import { SmallAvatar } from '../Common/Avatar';
import { Actions, Container, Content, UserName } from './CommentStyles';

const Comment = ({ avatar, content, displayName, createdAt, handleFocus }) => {
  return (
    <Container>
      <SmallAvatar>
        <img src={avatar} alt="" />
      </SmallAvatar>
      <Content>
        <div>
          <UserName>{displayName}</UserName>
          <p>{content}</p>
        </div>
        <Actions>
          <span>like</span>
          <span onClick={handleFocus}>reply</span>
          <span>{formatCreatedAt(createdAt)}</span>
        </Actions>
      </Content>
    </Container>
  );
};

export default Comment;
