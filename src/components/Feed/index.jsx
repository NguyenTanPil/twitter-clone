import { Container, Header } from './FeedStyles';
import { BsStars } from 'react-icons/bs';
import TweetBox from './TweetBox';

const Feed = () => {
  return (
    <Container>
      {/* Header */}
      <Header>
        <h2>Home</h2>
        <div>
          <BsStars />
        </div>
      </Header>
      {/* Tweetbox */}
      <TweetBox />
    </Container>
  );
};

export default Feed;
