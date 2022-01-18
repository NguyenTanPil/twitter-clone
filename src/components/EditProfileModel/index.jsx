import { AiOutlineClose } from 'react-icons/ai';
import { BsCamera } from 'react-icons/bs';
import {
  CloseButton,
  Container,
  Content,
  Header,
} from '../GifModel/GifModelStyles';
import { Avatar } from '../Pages/Profile/ProfileStyles';
import {
  AvatarUpload,
  BackgroundUpload,
  BodyAutoHeight,
  OverLoadUpload,
  Title,
} from './EditProfileModelStyles';

const EditProfileModel = ({ background, avatar }) => {
  return (
    <Container>
      <Content>
        <Header>
          <Title>
            <span>Edit Profile</span>
          </Title>
          <CloseButton>
            <AiOutlineClose />
          </CloseButton>
        </Header>
        <BodyAutoHeight>
          <BackgroundUpload>
            <img src={background} alt="" />
            <OverLoadUpload title="Add Photo">
              <div>
                <BsCamera />
              </div>
            </OverLoadUpload>
          </BackgroundUpload>
          <AvatarUpload>
            <Avatar>
              <div>
                <img src={avatar} alt="" />
                <OverLoadUpload title="Add Photo">
                  <div>
                    <BsCamera />
                  </div>
                </OverLoadUpload>
              </div>
            </Avatar>
          </AvatarUpload>
        </BodyAutoHeight>
      </Content>
    </Container>
  );
};

export default EditProfileModel;
