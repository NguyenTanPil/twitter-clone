import Comment from '../Comment';
import { Container } from './ReplyStyles';

const Replies = () => {
  return (
    <Container>
      <Comment
        avatar="https://lh3.googleusercontent.com/a-/AOh14GiLq0My7HOMCnz3WuZcrAytshhGdGjBDBp2eHWB_A=s96-c"
        content="Sửa thành npx serve -s build thử xem"
        displayName="Felix Nguyen"
        createdAt={1642949570625}
      />
    </Container>
  );
};

export default Replies;
