import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import db from '../../firebase';
import Comment from '../Comment';
import { Title } from '../EditProfileModel/EditProfileModelStyles';
import {
  CloseButton,
  Container,
  Content,
  Header,
} from '../GifModel/GifModelStyles';
import TweetBox from '../TweetBox';
import { Body, CommentContainer, NotComments } from './CommentModelStyles';

const CommentModel = ({
  postId,
  avatar,
  userId,
  displayName,
  setShowModel,
  setCommentCount,
}) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    let isSubscribed = true;

    const fetchComments = async () => {
      const queryComment = query(
        collection(db, 'comments'),
        where('postId', '==', postId),
      );
      const querySnapshot = await getDocs(queryComment);
      const responseCmts = [];

      querySnapshot.forEach((doc) => {
        responseCmts.push({ id: doc.id, ...doc.data() });
      });

      if (isSubscribed) {
        responseCmts.sort((a, b) => b.createdAt - a.createdAt);
        setComments(responseCmts);
      }
    };

    fetchComments();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const handleCloseModel = (e) => {
    e.stopPropagation();
    setShowModel(false);
  };

  const handleCreateComment = async (data) => {
    const comment = { ...data };
    comment.avatar = avatar;
    comment.displayName = displayName;
    comment.listUserLikes = [];
    comment.postId = postId;
    comment.userId = userId;
    comment.replyCount = 0;

    const docRef = await addDoc(collection(db, 'comments'), comment);

    updateDoc(doc(db, 'posts', postId), {
      comments: comments.length + 1,
    });

    setCommentCount(comments.length + 1);

    setComments((prev) => {
      return [{ ...comment, id: docRef.id }, ...prev];
    });
  };

  return (
    <Container>
      <Content>
        <Header>
          <Title>
            <span>Comments</span>
          </Title>
          <CloseButton onClick={handleCloseModel}>
            <AiOutlineClose />
          </CloseButton>
        </Header>
        <Body>
          <TweetBox
            avatar={avatar}
            contentBtn="Post"
            handleSubmit={handleCreateComment}
          />
          <CommentContainer>
            {comments.length === 0 ? (
              <NotComments>Don't comment! Start commenting!</NotComments>
            ) : (
              comments.map((comment) => {
                return <Comment key={comment.id} {...comment} />;
              })
            )}
          </CommentContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default CommentModel;
