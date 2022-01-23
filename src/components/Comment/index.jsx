import { Actions, Container, Content, UserName } from './CommentStyles';
import { SmallAvatar } from '../Common/Avatar';

import formatCreatedAt from '../../Utils/formatCreatedAt';

const Comment = ({ avatar, content, displayName, createdAt }) => {
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
          <span>reply</span>
          <span>{formatCreatedAt(createdAt)}</span>
        </Actions>
      </Content>
    </Container>
  );
};

export default Comment;
