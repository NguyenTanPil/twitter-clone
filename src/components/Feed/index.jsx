import { Container, Header, LoadingPosts } from './FeedStyles';
import { BsStars } from 'react-icons/bs';
import TweetBox from './TweetBox';
import Post from './Post';
import { useEffect, useState } from 'react';
import db from '../../firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import loadingImg from '../../assets/loading-posts.gif';
import { setPosts, selectPosts } from '../../features/posts/postsSlice';
import { useDispatch, useSelector } from 'react-redux';

const Feed = () => {
  const { posts } = useSelector(selectPosts);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let isSubscribed = true;

    const fetchPosts = async () => {
      const response = [];
      if (isSubscribed) {
        setIsLoading(true);
      }

      try {
        const postsRef = collection(db, 'posts');
        const queryPosts = query(postsRef, orderBy('createdAt', 'desc'));
        const posts = await getDocs(queryPosts);
        posts.forEach((doc) => {
          response.push({ id: doc.id, ...doc.data() });
        });
      } catch (e) {
        console.log('Error', e.message);
      }

      if (isSubscribed) {
        setIsLoading(false);
        dispatch(
          setPosts({
            posts: response,
          }),
        );
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
            type,
            listUserLikes,
          } = post;
          return (
            <Post
              key={id}
              id={id}
              avatar={avatar}
              createdAt={createdAt}
              displayName={displayName}
              image={image}
              content={content}
              type={type}
              userName={userName}
              listUserLikes={listUserLikes}
            />
          );
        })
      )}
    </Container>
  );
};

export default Feed;
