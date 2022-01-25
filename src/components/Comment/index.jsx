import formatCreatedAt from '../../Utils/formatCreatedAt';
import { SmallAvatar } from '../Common/Avatar';
import { Actions, Container, Content, UserName } from './CommentStyles';

const Comment = ({
  id,
  avatar,
  content,
  displayName,
  createdAt,
  userReply,
  handleFocus,
  setCommentId,
}) => {
  const handleReply = () => {
    handleFocus(displayName);
    setCommentId(id);
  };

  return (
    <Container>
      <SmallAvatar>
        <img src={avatar} alt="" />
      </SmallAvatar>
      <Content>
        <div>
          <UserName>{displayName}</UserName>
          <p>
            {userReply && <span>{userReply}</span>} {content}
          </p>
        </div>
        <Actions>
          <span>like</span>
          <span onClick={handleReply}>reply</span>
          <span>{formatCreatedAt(createdAt)}</span>
        </Actions>
      </Content>
    </Container>
  );
};

export default Comment;
