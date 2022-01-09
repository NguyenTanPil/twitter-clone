import { Container, Header, LoadingPosts } from './FeedStyles';
import { BsStars } from 'react-icons/bs';
import TweetBox from './TweetBox';
import Post from './Post';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';
import loadingImg from './loading-posts.gif';

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    const fetchPosts = async () => {
      const response = [];
      if (isSubscribed) {
        setIsLoading(true);
      }

      try {
        const querySnapshot = await getDocs(collection(db, 'posts'));
        querySnapshot.forEach((doc) => {
          const createdAt = doc._document.version.timestamp.seconds;
          response.push({ id: doc.id, createdAt, ...doc.data() });
        });
      } catch (e) {
        console.log('Error', e.message);
      }

      if (isSubscribed) {
        setIsLoading(false);
        setPosts(response);
      }
    };

    fetchPosts();

    return () => {
      isSubscribed = false;
    };
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

      {isLoading ? (
        <LoadingPosts>
          <img src={loadingImg} alt="" />
        </LoadingPosts>
      ) : (
        posts.map((post) => {
          const {
            id,
            avatar,
            createdAt,
            displayName,
            userName,
            content,
            image,
          } = post;
          return (
            <Post
              key={id}
              avatar={avatar}
              createdAt={createdAt}
              displayName={displayName}
              image={image}
              content={content}
              userName={userName}
            />
          );
        })
      )}
    </Container>
  );
};

export default Feed;
