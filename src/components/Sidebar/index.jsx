import {
  Container,
  Wrap,
  Logo,
  SidebarOptions,
  User,
  Info,
  SmallAvatar,
} from './SidebarStyles';
import SidebarOption from './SidebarOption';
import { BsTwitter } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { CgList, CgProfile, CgMore } from 'react-icons/cg';
import {
  RiHomeHeartFill,
  RiHashtag,
  RiNotification3Line,
  RiMoreFill,
} from 'react-icons/ri';
import { Button } from '../Common/Button';
import { MoreIcon, DisplayName, UserName } from '../Feed/Post/PostStyles';

const Sidebar = () => {
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
            <SidebarOption text="Explore" Icon={RiHashtag} />
            <SidebarOption text="Notifications" Icon={RiNotification3Line} />
            <SidebarOption text="Messages" Icon={HiOutlineMail} />
            <SidebarOption text="Bookmarks" Icon={BiBookmark} />
            <SidebarOption text="List" Icon={CgList} />
            <SidebarOption text="Profile" Icon={CgProfile} />
            <SidebarOption text="More" Icon={RiMoreFill} />
          </SidebarOptions>
          <Button>Twitter</Button>
        </div>

        <User>
          <SmallAvatar>
            <img
              src="https://pbs.twimg.com/profile_images/1477919658590146560/bQxLDkoP_400x400.png"
              alt=""
            />
          </SmallAvatar>
          <Info>
            <DisplayName>Felix Nguyen</DisplayName>
            <UserName>@NguyenTanPil</UserName>
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
