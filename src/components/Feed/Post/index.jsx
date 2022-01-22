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
import { Avatar } from '../../Common/Avatar';
import {
  Action,
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

const getTimeCreated = (createdTime) => {
  const dt = new Date();
  const currentTime = dt.getTime();

  const unix_timestamp = (currentTime - createdTime) / 1000;
  var days = Math.floor(unix_timestamp / (3600 * 24));
  var hours = Math.floor((unix_timestamp % (3600 * 24)) / 3600);
  var minutes = Math.floor((unix_timestamp % 3600) / 60);
  var seconds = Math.floor(unix_timestamp % 60);

  let result = '';
  if (days > 360) {
    result = `${Math.floor(days / 360)}y`;
  } else if (days > 30) {
    result = `${Math.floor(days / 30)}m`;
  } else if (days > 0) {
    result = `${days}d`;
  } else if (hours > 0) {
    result = `${hours}h`;
  } else if (minutes > 0) {
    result = `${minutes}m`;
  } else {
    result = `${seconds}s`;
  }

  return result;
};

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
}) => {
  const user = useSelector(selectUser);
  const [listLike, setListLike] = useState(listUserLikes);

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
                <UserName>{getTimeCreated(createdAt)}</UserName>
              </div>
              <MoreIcon>
                <CgMore />
              </MoreIcon>
            </Info>
            <Content>{content}</Content>
          </Header>
          <Body>
            {type === 'video' ? (
              <PostVideo src={image} />
            ) : (
              <img src={image} alt="" />
            )}
          </Body>
          <Footer>
            <Action>
              <div>
                <BiComment />
              </div>
              <span>27</span>
            </Action>
            <Action>
              <div>
                <TiArrowSync />
              </div>
              <span>23</span>
            </Action>
            <Action
              active={listLike.includes(user.id) ? 1 : 0}
              title={listLike.includes(user.id) ? 'Unlike' : 'Like'}
              onClick={handleLikeClick}
            >
              <div>
                <AiOutlineHeart />
              </div>
              <span>{formatLikeCount(listLike.length)}</span>
            </Action>
            <Action>
              <div>
                <BiUpload />
              </div>
            </Action>
          </Footer>
        </Wrap>
      </Container>
    </LazyLoadComponent>
  );
};

export default Post;
