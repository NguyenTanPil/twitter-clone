import { AiOutlineClose } from 'react-icons/ai';
import { BsCamera } from 'react-icons/bs';
import {
  CloseButton,
  Container,
  Content,
  Header,
} from '../GifModel/GifModelStyles';
import { Avatar } from '../Pages/Profile/ProfileStyles';
import placeholderBg from '../Pages/Profile/placehoder-bg.jpg';
import {
  AvatarUpload,
  BackgroundUpload,
  BodyAutoHeight,
  FormEdit,
  FormGroup,
  OverLoadUpload,
  Title,
} from './EditProfileModelStyles';
import { Form, Formik, Field } from 'formik';
import db from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { setLoginDetail } from '../../features/user/userSlice';

const EditProfileModel = ({
  id,
  background,
  avatar,
  name,
  bio,
  location,
  website,
  setShowModel,
}) => {
  const dispatch = useDispatch();

  const handlePreviewMedia = (e, name, setFieldValue) => {
    const reader = new FileReader();
    const file = e.target.files[0];
    try {
      reader.onload = () => {
        if (reader.readyState === 2) {
          setFieldValue(name, reader.result);
        }
      };

      reader.readAsDataURL(file);
    } catch (error) {
      setFieldValue(name, '');
    }
  };

  const uploadImageToCloudinary = async (image) => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/upload`;

    // Create form data
    const data = new FormData();
    data.append('file', image);
    data.append('upload_preset', 'user-twitter');

    const res = await fetch(url, {
      method: 'POST',
      body: data,
    });

    // Response media url from cloudinary
    const fileRes = await res.json();
    return fileRes.secure_url;
  };

  const handleSaveEdit = async (user) => {
    const { avatar, background } = user;

    const avatarUrl = await uploadImageToCloudinary(avatar);
    const backgroundUrl = await uploadImageToCloudinary(background);

    const newUser = { avatar: avatarUrl, background: backgroundUrl, ...user };

    await setDoc(doc(db, 'users', id), newUser);
    setShowModel(false);
    dispatch(setLoginDetail({ newUser }));
  };

  return (
    <Container>
      <Content>
        <Header>
          <Title>
            <span>Edit Profile</span>
          </Title>
          <CloseButton onClick={() => setShowModel(false)}>
            <AiOutlineClose />
          </CloseButton>
        </Header>
        <Formik
          initialValues={{
            avatar,
            background,
            bio,
            location,
            name,
            website,
          }}
          validateOnBlur={false}
          onSubmit={(values) => {
            handleSaveEdit(values);
          }}
        >
          {(props) => (
            <Form onSubmit={props.handleSubmit} style={{ height: '100%' }}>
              <BodyAutoHeight>
                {console.log(props)}
                <BackgroundUpload>
                  <img src={props.values.background || placeholderBg} alt="" />

                  <OverLoadUpload title="Add Photo">
                    <label htmlFor="background">
                      <BsCamera />
                      <input
                        type="file"
                        id="background"
                        name="background"
                        accept="image/jpeg,image/png,image/webp"
                        onChange={(e) =>
                          handlePreviewMedia(
                            e,
                            'background',
                            props.setFieldValue,
                          )
                        }
                      />
                    </label>
                  </OverLoadUpload>
                </BackgroundUpload>
                <AvatarUpload>
                  <Avatar>
                    <div>
                      <img src={props.values.avatar} alt="" />
                      <OverLoadUpload title="Add Photo">
                        <label htmlFor="avatar">
                          <BsCamera />
                          <input
                            type="file"
                            id="avatar"
                            name="avatar"
                            accept="image/jpeg,image/png,image/webp"
                            onChange={(e) =>
                              handlePreviewMedia(
                                e,
                                'avatar',
                                props.setFieldValue,
                              )
                            }
                          />
                        </label>
                      </OverLoadUpload>
                    </div>
                  </Avatar>
                </AvatarUpload>
                <FormEdit>
                  <FormGroup>
                    <label htmlFor="name">Name</label>
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      autoComplete="off"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="bio">bio</label>
                    <Field
                      type="text"
                      name="bio"
                      placeholder="Enter your bio"
                      autoComplete="off"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="location">Location</label>
                    <Field
                      type="text"
                      name="location"
                      placeholder="Enter your location"
                      autoComplete="off"
                    />
                  </FormGroup>
                  <FormGroup>
                    <label htmlFor="website">website</label>
                    <Field
                      type="text"
                      name="website"
                      placeholder="Enter your website"
                      autoComplete="off"
                    />
                  </FormGroup>
                  <FormGroup>
                    <button type="submit">Save</button>
                  </FormGroup>
                </FormEdit>
              </BodyAutoHeight>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default EditProfileModel;
