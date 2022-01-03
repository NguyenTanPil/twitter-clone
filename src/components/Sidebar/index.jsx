import { Container, Logo, SidebarOptions } from './SidebarStyles';
import SidebarOption from './SidebarOption';
import { BsTwitter } from 'react-icons/bs';
import { BiBookmark } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import { CgList, CgProfile } from 'react-icons/cg';
import {
  RiHomeHeartFill,
  RiHashtag,
  RiNotification3Line,
  RiMoreFill,
} from 'react-icons/ri';
import { Button } from '../Common/Button';

const Sidebar = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default Sidebar;
