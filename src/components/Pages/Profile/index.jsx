import { useState } from 'react';
import { AiOutlineSchedule } from 'react-icons/ai';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectUser } from '../../../features/user/userSlice';
import EditProfileModel from '../../EditProfileModel';
import placeholderBg from '../../../assets/placehoder-bg.jpg';
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
  const [showEditProfileModel, setShowEditProfileModel] = useState(false);

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
          <img src={user.background || placeholderBg} alt="" />
        </Background>
        <Detail>
          <AvatarAndEdit>
            <Avatar>
              <img src={user.avatar} alt="" />
            </Avatar>
            <EditProfile>
              {showEditProfileModel && (
                <EditProfileModel
                  background={placeholderBg}
                  {...user}
                  setShowModel={setShowEditProfileModel}
                />
              )}
              <button onClick={() => setShowEditProfileModel(true)}>
                Edit Profile
              </button>
            </EditProfile>
          </AvatarAndEdit>
          <UserInfo>
            <h2>{user.name}</h2>
            <span>@{user.name}</span>
            <span>
              <AiOutlineSchedule />
              {user.joined}
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
