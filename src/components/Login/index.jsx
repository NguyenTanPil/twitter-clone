import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Form, Formik } from 'formik';
import { useEffect, useState } from 'react';
import { AiFillLock } from 'react-icons/ai';
import { BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { setLoginDetail } from '../../features/user/userSlice';
import db, { auth, provider } from '../../firebase';
import { Button } from '../Common/Button';
import Input from '../Input';
import {
  ChooseOption,
  Container,
  ContentForm,
  LoginButton,
  LoginForm,
  Logo,
  MiddleLogin,
  Or,
  Wrap,
} from './LoginStyles';

const validate = {
  // check email
  email(value) {
    let error;

    if (!value) {
      error = 'Please enter your email address';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = 'Invalid email address';
    }

    return error;
  },
  // check password
  password(value) {
    let error;

    if (!value) {
      error = 'Please enter your password';
    } else if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(value)) {
      error = 'Minimum 8 characters, at least one letter and one number';
    }

    return error;
  },
};

const convertCreateAtToJoinedTime = (createdAt) => {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const date = new Date(parseInt(createdAt));

  return `Joined ${monthNames[date.getMonth()]} ${date.getFullYear()}`;
};

const Login = () => {
  const [userInfo, setUserInfo] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const setCookie = (data) => {
    const cookies = new Cookies();
    const user = JSON.stringify(data);
    cookies.set('user', user, { path: '/', maxAge: 60 * 60, sameSite: true });
  };

  const handleAfterLogin = async (response) => {
    const userId = response.user.uid;
    let currentUser;

    // check user is exists
    const userSnap = await getDoc(doc(db, 'users', userId));

    if (userSnap.exists()) {
      currentUser = { id: userId, ...userSnap.data() };
    } else {
      const user = {
        name: response.user.displayName,
        email: response.user.email,
        avatar: response.user.photoURL,
        joined: convertCreateAtToJoinedTime(response.user.metadata.createdAt),
        background: '',
        bio: '',
        location: '',
        website: '',
      };
      await setDoc(doc(db, 'users', userId), user);
      currentUser = { id: userId, ...user };
    }

    dispatch(setLoginDetail({ currentUser }));
    setCookie(currentUser);
    setUserInfo(currentUser);
  };

  const handleLoginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((response) => {
        handleAfterLogin(response);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const handleLoginWithEmailAndPassword = (values) => {
    const { email, password } = values;

    signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        handleAfterLogin(response);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/user-not-found') {
          alert('Email or password is incorrect. Try again! ');
        } else {
          console.log('Error login', errorMessage);
        }
      });
  };

  useEffect(() => {
    // If logined => current url is /home and setUser
    const cookies = new Cookies();
    const user = cookies.get('user');

    if (user) {
      navigate('/');
    }
  }, [userInfo, navigate]);

  return (
    <Container>
      <Wrap>
        <LoginForm>
          <Formik
            initialValues={{
              email: '',
              password: '',
            }}
            validateOnChange={false}
            validateOnBlur={true}
            onSubmit={handleLoginWithEmailAndPassword}
          >
            {({ errors, touched, validateForm, handleSubmit }) => (
              <Form onSubmit={handleSubmit} noValidate>
                <Logo>
                  <BsTwitter />
                  <h2>Login to Twitter</h2>
                </Logo>
                <ContentForm>
                  <Input
                    Icon={MdEmail}
                    type="email"
                    name="email"
                    placeholder="Email"
                    validateFunc={validate.email}
                    errorMessage={errors.email && touched.email && errors.email}
                    touched={touched.email}
                  />
                  <Input
                    Icon={AiFillLock}
                    type="password"
                    name="password"
                    placeholder="Password"
                    validateFunc={validate.password}
                    errorMessage={
                      errors.password && touched.password && errors.password
                    }
                    touched={touched.password}
                  />
                  <LoginButton>
                    <Button type="submit" onClick={() => validateForm()}>
                      LOGIN
                    </Button>
                  </LoginButton>
                  <ChooseOption>
                    <span>Don't have a account?</span>
                    <Link to="/signup">Sign Up</Link>
                  </ChooseOption>
                  <Or>
                    <div></div>
                    <span>OR</span>
                    <div></div>
                  </Or>
                  <MiddleLogin facebook>
                    <div>
                      <FaFacebookF />
                    </div>
                    <div>
                      <span>Login with Facebook</span>
                    </div>
                  </MiddleLogin>
                  <MiddleLogin onClick={handleLoginWithGoogle}>
                    <div>
                      <FcGoogle />
                    </div>
                    <div>
                      <span>Login with Google</span>
                    </div>
                  </MiddleLogin>
                </ContentForm>
              </Form>
            )}
          </Formik>
        </LoginForm>
      </Wrap>
    </Container>
  );
};

export default Login;
