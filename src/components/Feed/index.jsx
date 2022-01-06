import { Container, Header } from './FeedStyles';
import { BsStars } from 'react-icons/bs';
import TweetBox from './TweetBox';
import Post from './Post';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const response = [];

    try {
      const querySnapshot = await getDocs(collection(db, 'posts'));
      querySnapshot.forEach((doc) => {
        const createdAt = doc._document.version.timestamp.seconds;
        response.push({ id: doc.id, createdAt, ...doc.data() });
      });
    } catch (e) {
      console.log('Error', e);
    }

    setPosts(response);
  }, []);

  return (
    <Container>
      <Header>
        <h2>Home</h2>
        <div>
          <BsStars />
        </div>
      </Header>
      <TweetBox />

      {posts.map((post) => {
        const { id, avatar, createdAt, displayName, userName, content, image } =
          post;
        return (
          <Post
            key={id}
            avartar={avatar}
            createdAt={createdAt}
            displayName={displayName}
            image={image}
            content={content}
            userName={userName}
          />
        );
      })}
    </Container>
  );
};

export default Feed;
