import { signOut } from 'firebase/auth';
import { AiOutlineCheck } from 'react-icons/ai';
import { BiBookmark } from 'react-icons/bi';
import { BsTwitter } from 'react-icons/bs';
import { CgList, CgMathPlus, CgMore, CgProfile } from 'react-icons/cg';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlineColorLens } from 'react-icons/md';
import {
  RiHashtag,
  RiHomeHeartFill,
  RiNotification3Line,
} from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { auth } from '../../firebase';
import { Avatar, SmallAvatar } from '../Common/Avatar';
import { Button } from '../Common/Button';
import { DisplayName, MoreIcon, UserName } from '../Feed/Post/PostStyles';
import SidebarOption from './SidebarOption';
import {
  CheckIcon,
  Container,
  CurrentUser,
  Info,
  Logo,
  SidebarOptions,
  SignOut,
  User,
  Wrap,
} from './SidebarStyles';
import { Link } from 'react-router-dom';

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
        navigate('/login');
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
            <Link to="/">
              <BsTwitter />
            </Link>
          </Logo>
          <SidebarOptions>
            <SidebarOption path="/" text="Home" Icon={RiHomeHeartFill} />
            <SidebarOption
              path="/"
              hideInPhone
              text="Explore"
              Icon={RiHashtag}
            />
            <SidebarOption
              path="/"
              text="Notifications"
              Icon={RiNotification3Line}
            />
            <SidebarOption path="/" text="Messages" Icon={HiOutlineMail} />
            <SidebarOption
              path="/"
              hideInPhone
              text="Bookmarks"
              Icon={BiBookmark}
            />
            <SidebarOption path="/" hideInPhone text="List" Icon={CgList} />
            <SidebarOption
              path="/profile"
              hideInPhone
              text="Profile"
              Icon={CgProfile}
            />
            <SidebarOption
              path="/appearance"
              text="Appearance"
              Icon={MdOutlineColorLens}
            />
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
