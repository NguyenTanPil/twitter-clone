import {
  Container,
  Wrap,
  Logo,
  SidebarOptions,
  User,
  Info,
} from './SidebarStyles';
import { SmallAvatar } from '../Common/Avatar';
import SidebarOption from './SidebarOption';
import { BsTwitter } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { CgList, CgProfile, CgMore, CgMathPlus } from 'react-icons/cg';
import {
  RiHomeHeartFill,
  RiHashtag,
  RiNotification3Line,
  RiMoreFill,
} from 'react-icons/ri';
import { Button } from '../Common/Button';
import { MoreIcon, DisplayName, UserName } from '../Feed/Post/PostStyles';

const Sidebar = ({ user }) => {
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
        </User>
      </Wrap>
    </Container>
  );
};

export default Sidebar;
