import { Container, Avatar, Form, Input } from './TweetBoxStyles';

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
      </Form>
    </Container>
  );
};

export default TweetBox;
