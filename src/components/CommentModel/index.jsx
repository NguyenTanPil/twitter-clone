import {
  addDoc,
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';
import { useEffect, useRef, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import loadingReply from '../../assets/loading-post-item.gif';
import db from '../../firebase';
import Comment from '../Comment';
import { Title } from '../EditProfileModel/EditProfileModelStyles';
import {
  CloseButton,
  Container,
  Content,
  Header,
} from '../GifModel/GifModelStyles';
import Reply from '../Reply';
import TweetBox from '../TweetBox';
import {
  Body,
  CommentContainer,
  CommentItem,
  LoadingReply,
  NotComments,
} from './CommentModelStyles';

const CommentModel = ({
  postId,
  avatar,
  userId,
  displayName,
  commentCount,
  setShowModel,
  setCommentCount,
}) => {
  const [comments, setComments] = useState([]);
  const [type, setType] = useState('comment');
  const [commentId, setCommentId] = useState('');
  const [userReply, setUserReply] = useState('');
  const inputRef = useRef();

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
    // create data to post
    const comment = { ...data };
    comment.avatar = avatar;
    comment.displayName = displayName;
    comment.userId = userId;
    comment.listUserLikes = [];

    let docRef;
    if (type === 'comment') {
      // comment action
      comment.replyCount = 0;
      comment.postId = postId;
      docRef = await addDoc(collection(db, 'comments'), comment);
    } else {
      // reply action
      comment.commentId = commentId;
      comment.userReply = userReply;
      docRef = await addDoc(collection(db, 'replies'), comment);

      // increase reply count in firestore
      updateDoc(doc(db, 'comments', commentId), {
        replyCount: comments.find((cmt) => cmt.id === commentId).replyCount + 1,
      });
    }

    // update comment in post when comment or reply
    updateDoc(doc(db, 'posts', postId), {
      comments: commentCount + 1,
    });
    setCommentCount(commentCount + 1);

    if (type === 'comment') {
      setComments((prev) => {
        return [...prev, { ...comment, id: docRef.id }];
      });
    } else {
      // increase reply count in state
      const newComments = comments.map((cmt) => {
        if (cmt.id === commentId) {
          return { ...cmt, replyCount: cmt.replyCount + 1 };
        } else {
          return cmt;
        }
      });

      setComments(newComments);
    }

    // reset type to comment
    setType('comment');
  };

  const handleFocus = (userName) => {
    inputRef.current.focus(userName);
    setType('reply');
    setUserReply(userName);
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
            ref={inputRef}
            contentBtn="Post"
            handleSubmit={handleCreateComment}
          />
          <CommentContainer>
            {commentCount === 0 ? (
              <NotComments>Don't comment! Start commenting!</NotComments>
            ) : comments.length === 0 ? (
              <LoadingReply>
                <img src={loadingReply} alt="" />
              </LoadingReply>
            ) : (
              comments.map((comment) => {
                return (
                  <CommentItem key={comment.id}>
                    <Comment
                      {...comment}
                      setCommentId={setCommentId}
                      handleFocus={handleFocus}
                    />
                    {comment.replyCount > 0 && (
                      <Reply
                        replyCount={comment.replyCount}
                        commentId={comment.id}
                        handleFocus={handleFocus}
                        setCommentId={setCommentId}
                      />
                    )}
                  </CommentItem>
                );
              })
            )}
          </CommentContainer>
        </Body>
      </Content>
    </Container>
  );
};

export default CommentModel;
