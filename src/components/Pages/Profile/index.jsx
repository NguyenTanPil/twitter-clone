import { AiOutlineSchedule } from 'react-icons/ai';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../../../features/user/userSlice';
import placeholderBg from './placehoder-bg.jpg';
import {
  Avatar,
  AvatarAndEdit,
  Background,
  Container,
  Detail,
  DetailInfo,
  EditProfile,
  FollowCount,
  FollowInfo,
  Header,
  UserInfo,
} from './ProfileStyles';

const Profile = () => {
  const user = useSelector(selectUser);

  return (
    <Container>
      <Header>
        <NavLink to="/">
          <HiArrowNarrowLeft />
        </NavLink>
        <h2>{user.name}</h2>
      </Header>
      <DetailInfo>
        <Background>
          <img src={placeholderBg} alt="" />
        </Background>
        <Detail>
          <AvatarAndEdit>
            <Avatar>
              <img src={user.avatar} alt="" />
            </Avatar>
            <EditProfile>
              <button>Edit Profile</button>
            </EditProfile>
          </AvatarAndEdit>
          <UserInfo>
            <h2>{user.name}</h2>
            <span>@{user.name}</span>
            <span>
              <AiOutlineSchedule />
              Joined January 2022
            </span>
          </UserInfo>
          <FollowInfo>
            <FollowCount>
              <span>1</span> Following
            </FollowCount>
            <FollowCount>
              <span>0</span> Followers
            </FollowCount>
          </FollowInfo>
        </Detail>
      </DetailInfo>
    </Container>
  );
};

export default Profile;
