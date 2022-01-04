import { Container, Header } from './FeedStyles';
import { BsStars } from 'react-icons/bs';
import TweetBox from './TweetBox';
import Post from './Post';

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
      {/* Posts */}
      <Post
        avartar="https://pbs.twimg.com/profile_images/1473025274128175108/l_H0iI_4_400x400.jpg"
        displayName="Archaeo - Histories"
        image="https://pbs.twimg.com/media/FIMCvz0XwAYwCLt?format=jpg&name=900x900"
        text="The best movie"
        userName="@archeohistories"
      />
      <Post
        avartar="https://pbs.twimg.com/profile_images/1408484274609831936/cSK41XoT_400x400.jpg"
        displayName="AnimeBezz"
        image="https://pbs.twimg.com/media/FIH25JaXoAYQXUF?format=jpg&name=900x900"
        text="Anime: Demon Slayer"
        userName="@shonenvibezz"
      />
      <Post
        avartar="https://pbs.twimg.com/profile_images/1450930599787642884/ugXjeQfn_400x400.jpg"
        displayName="Studio Ghibli"
        image="https://pbs.twimg.com/media/FIHZKg1X0AYjqsG?format=jpg&name=900x900"
        text="Anime : Howl’s Moving Castle"
        userName="@ghiblipicture"
      />
    </Container>
  );
};

export default Feed;
