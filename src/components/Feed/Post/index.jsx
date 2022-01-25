import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiComment, BiUpload } from 'react-icons/bi';
import { CgMore } from 'react-icons/cg';
import { TiArrowSync } from 'react-icons/ti';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../features/user/userSlice';
import db from '../../../firebase';
import formatCreatedAt from '../../../Utils/formatCreatedAt';
import CommentModel from '../../CommentModel';
import { Avatar } from '../../Common/Avatar';
import {
  Action,
  ActionIcon,
  Body,
  Container,
  Content,
  DisplayName,
  Footer,
  Header,
  Info,
  MoreIcon,
  UserName,
  Wrap,
} from './PostStyles';
import PostVideo from './PostVideo';

const formatLikeCount = (likes) => {
  if (likes >= 1000000) {
    return `${Math.round((likes / 1000000) * 10) / 10}M`;
  } else if (likes >= 1000) {
    return `${Math.round((likes / 1000) * 10) / 10}K`;
  } else {
    return likes;
  }
};

const Post = ({
  id,
  avatar,
  createdAt,
  displayName,
  image,
  content,
  userName,
  type,
  listUserLikes,
  comments,
}) => {
  const user = useSelector(selectUser);
  const [listLike, setListLike] = useState(listUserLikes);
  const [showComment, setShowComment] = useState(false);
  const [commentCount, setCommentCount] = useState(comments);

  const handleLikeClick = async () => {
    if (listLike.includes(user.id)) {
      // like
      const newListLike = listLike.filter((id) => id !== user.id);
      setListLike(newListLike);
      await updateDoc(doc(db, 'posts', id), {
        listUserLikes: newListLike,
      });
    } else {
      // unlike
      const newListLike = [user.id, ...listLike];
      setListLike(newListLike);
      await updateDoc(doc(db, 'posts', id), {
        listUserLikes: newListLike,
      });
    }
  };

  return (
    <LazyLoadComponent>
      <Container>
        <Avatar>
          <img src={avatar} alt="avt" />
        </Avatar>
        <Wrap>
          <Header>
            <Info>
              <div>
                <DisplayName>{displayName}</DisplayName>
                <UserName>{userName}</UserName>
                <UserName>·</UserName>
                <UserName>{formatCreatedAt(createdAt)}</UserName>
              </div>
              <MoreIcon>
                <CgMore />
              </MoreIcon>
            </Info>
            <Content>{content}</Content>
          </Header>
          {type !== 'text' && (
            <Body>
              {type === 'video' ? (
                <PostVideo src={image} />
              ) : (
                <img src={image} alt="" />
              )}
            </Body>
          )}
          <Footer>
            <Action onClick={() => setShowComment(true)}>
              <ActionIcon>
                <BiComment />
              </ActionIcon>
              <span>{formatLikeCount(commentCount)}</span>
              {showComment && (
                <CommentModel
                  postId={id}
                  avatar={user.avatar}
                  displayName={user.name}
                  userId={user.id}
                  commentCount={commentCount}
                  setShowModel={setShowComment}
                  setCommentCount={setCommentCount}
                />
              )}
            </Action>
            <Action>
              <ActionIcon>
                <TiArrowSync />
              </ActionIcon>
              <span>23</span>
            </Action>
            <Action
              active={listLike.includes(user.id) ? 1 : 0}
              title={listLike.includes(user.id) ? 'Unlike' : 'Like'}
              onClick={handleLikeClick}
            >
              <ActionIcon>
                <AiOutlineHeart />
              </ActionIcon>
              <span>{formatLikeCount(listLike.length)}</span>
            </Action>
            <Action>
              <ActionIcon>
                <BiUpload />
              </ActionIcon>
            </Action>
          </Footer>
        </Wrap>
      </Container>
    </LazyLoadComponent>
  );
};

export default Post;
