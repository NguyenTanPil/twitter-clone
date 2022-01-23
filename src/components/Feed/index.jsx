import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { BsStars } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import loadingImg from '../../assets/loading-posts.gif';
import {
  addPost,
  selectPosts,
  setPosts,
} from '../../features/posts/postsSlice';
import { selectUser } from '../../features/user/userSlice';
import db from '../../firebase';
import TweetBox from '../TweetBox';
import { Container, Header, LoadingPosts } from './FeedStyles';
import Post from './Post';

const Feed = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const { posts } = useSelector(selectPosts);
  const [isLoading, setIsLoading] = useState(false);

  const createPost = async (data) => {
    const post = { ...data };
    post.userId = user.id;
    post.avatar = user.avatar;
    post.displayName = user.name;
    post.userName = `@${user.name}`;
    post.listUserLikes = [];
    post.verified = false;

    const docRef = await addDoc(collection(db, 'posts'), post);
    const id = docRef.id;

    dispatch(
      addPost({
        post: {
          ...post,
          id,
        },
      }),
    );
  };

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
      <TweetBox
        avatar={user.avatar}
        contentBtn="Tweet"
        handleSubmit={createPost}
      />

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
            comments,
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
              comments={comments}
            />
          );
        })
      )}
    </Container>
  );
};

export default Feed;
