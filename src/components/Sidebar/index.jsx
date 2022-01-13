import {
  Container,
  Wrap,
  Logo,
  SidebarOptions,
  User,
  Info,
  SignOut,
  CurrentUser,
  CheckIcon,
} from './SidebarStyles';
import { SmallAvatar, Avatar } from '../Common/Avatar';
import SidebarOption from './SidebarOption';
import { BsTwitter } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { AiOutlineCheck } from 'react-icons/ai';
import { CgList, CgProfile, CgMore, CgMathPlus } from 'react-icons/cg';
import {
  RiHomeHeartFill,
  RiHashtag,
  RiNotification3Line,
  RiMoreFill,
} from 'react-icons/ri';
import { Button } from '../Common/Button';
import { MoreIcon, DisplayName, UserName } from '../Feed/Post/PostStyles';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';

const Sidebar = ({ user }) => {
  const navigate = useNavigate();
  const cookies = new Cookies();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        cookies.remove('user', user, {
          path: '/',
          maxAge: 60 * 60,
          sameSite: true,
        });
        navigate('/');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSignOutAndCreateAccount = () => {
    signOut(auth)
      .then(() => {
        cookies.remove('user', user, {
          path: '/',
          maxAge: 60 * 60,
          sameSite: true,
        });
        navigate('/signup');
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <Container>
      <Wrap>
        <div>
          <Logo>
            <a href="/">
              <BsTwitter />
            </a>
          </Logo>
          <SidebarOptions>
            <SidebarOption active text="Home" Icon={RiHomeHeartFill} />
            <SidebarOption hideInPhone text="Explore" Icon={RiHashtag} />
            <SidebarOption text="Notifications" Icon={RiNotification3Line} />
            <SidebarOption text="Messages" Icon={HiOutlineMail} />
            <SidebarOption hideInPhone text="Bookmarks" Icon={BiBookmark} />
            <SidebarOption hideInPhone text="List" Icon={CgList} />
            <SidebarOption hideInPhone text="Profile" Icon={CgProfile} />
            <SidebarOption text="More" Icon={RiMoreFill} />
          </SidebarOptions>
          <Button>
            <span>Tweet</span>
            <CgMathPlus />
          </Button>
        </div>

        <User>
          <SmallAvatar>
            <img src={user.avatar} alt="" />
          </SmallAvatar>
          <Info>
            <DisplayName>{user.name}</DisplayName>
            <UserName>@{user.name}</UserName>
          </Info>
          <MoreIcon>
            <CgMore />
          </MoreIcon>
          <SignOut>
            <div>
              <CurrentUser>
                <Avatar>
                  <img src={user.avatar} alt="" />
                </Avatar>
                <Info>
                  <DisplayName>{user.name}</DisplayName>
                  <UserName>@{user.name}</UserName>
                </Info>
                <CheckIcon>
                  <AiOutlineCheck />
                </CheckIcon>
              </CurrentUser>
              <span onClick={handleSignOutAndCreateAccount}>
                Add new account
              </span>
              <span onClick={handleSignOut}>Log out</span>
            </div>
          </SignOut>
        </User>
      </Wrap>
    </Container>
  );
};

export default Sidebar;
