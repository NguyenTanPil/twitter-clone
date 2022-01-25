import { collection, getDocs, query, where } from 'firebase/firestore';
import { useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaAngleDown } from 'react-icons/fa';
import db from '../../firebase';
import Comment from '../Comment';
import { Container, Content, ViewMore, LoadingIcon } from './ReplyStyles';

const Replies = ({ replyCount, commentId, handleFocus, setCommentId }) => {
  const [replies, setReplies] = useState([]);
  const [showReply, setShowReply] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchReplies = async () => {
    const queryReplies = query(
      collection(db, 'replies'),
      where('commentId', '==', commentId),
    );
    const querySnapshot = await getDocs(queryReplies);
    const responseReplies = [];

    querySnapshot.forEach((doc) => {
      responseReplies.push({ id: doc.id, ...doc.data() });
    });

    responseReplies.sort((a, b) => a.createdAt - b.createdAt);

    setReplies(responseReplies);
    setLoading(false);
    setShowReply(true);
  };

  const handleShowReply = () => {
    if (replies.length === 0) {
      setLoading(true);
      fetchReplies();
    } else {
      setShowReply(!showReply);
    }
  };

  return (
    <Container>
      <ViewMore loading={loading ? 1 : 0} onClick={handleShowReply}>
        {showReply ? (
          <span>Hide comments</span>
        ) : (
          <>
            <span>View more {replyCount} comments</span>
            {loading ? (
              <LoadingIcon>
                <AiOutlineLoading3Quarters />
              </LoadingIcon>
            ) : (
              <FaAngleDown />
            )}
          </>
        )}
      </ViewMore>
      {showReply && (
        <Content>
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              {...reply}
              id={commentId}
              handleFocus={handleFocus}
              setCommentId={setCommentId}
            />
          ))}
        </Content>
      )}
    </Container>
  );
};

export default Replies;
