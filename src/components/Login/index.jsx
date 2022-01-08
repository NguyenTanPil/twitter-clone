import { AiFillLock } from 'react-icons/ai';
import { BsFillPersonFill, BsTwitter } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Button } from '../Common/Button';
import {
  Container,
  ContentForm,
  InputGroup,
  LoginButton,
  LoginForm,
  Logo,
  MiddleLogin,
  Or,
  Wrap,
} from './LoginStyles';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../../firebase';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLoginDetail } from '../../features/user/userSlice';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';

const Login = () => {
  const [userInfo, setUserInfo] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cookies = new Cookies();

  const setCookie = (data) => {
    const user = JSON.stringify(data);
    cookies.set('user', user, { path: '/', maxAge: 60 * 2, sameSite: true });
  };

  const handleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = {
          name: result.user.displayName,
          email: result.user.email,
          avatar: result.user.photoURL,
        };

        dispatch(setLoginDetail(user));
        setCookie(user);
        setUserInfo(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  useEffect(() => {
    // If logined => current url is /home and setUser
    const user = cookies.get('user');
    if (user) {
      navigate('/home');
    }
  }, [userInfo]);

  return (
    <Container>
      <Wrap>
        <LoginForm>
          <form>
            <Logo>
              <BsTwitter />
              <h2>Login to Twitter</h2>
            </Logo>
            <ContentForm>
              <InputGroup>
                <div>
                  <BsFillPersonFill />
                </div>
                <input type="text" placeholder="Username" autoComplete="true" />
              </InputGroup>
              <InputGroup>
                <div>
                  <AiFillLock />
                </div>
                <input
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </InputGroup>
              <LoginButton>
                <Button>LOGIN</Button>
              </LoginButton>
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
              <MiddleLogin onClick={handleLogin}>
                <div>
                  <FcGoogle />
                </div>
                <div>
                  <span>Login with Google</span>
                </div>
              </MiddleLogin>
            </ContentForm>
          </form>
        </LoginForm>
      </Wrap>
    </Container>
  );
};

export default Login;
