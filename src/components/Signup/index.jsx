import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import { AiFillLock } from 'react-icons/ai';
import {
  BsFillPersonFill,
  BsFillShieldLockFill,
  BsTwitter,
} from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { auth } from '../../firebase';
import { Button } from '../Common/Button';
import Input from '../Input';
import {
  ChooseOption,
  Container,
  ContentForm,
  LoginButton,
  LoginForm,
  Logo,
  Wrap,
} from '../Login/LoginStyles';

// validate form
const validate = {
  // check user name
  userName(value) {
    let error;
    const maxLength = 15;

    if (!value) {
      error = 'Please enter your user name';
    } else if (['admin', 'null', 'god'].includes(value)) {
      error = 'Nice try!';
    } else if (value.length > maxLength) {
      error = 'Must be 15 characters or less';
    }

    return error;
  },
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
  // check repeat password
  repeatPass(value, pass) {
    let error;

    if (!value) {
      error = 'Please enter confirm password';
    } else if (value !== pass) {
      error = 'Password is not matched';
    }

    return error;
  },
};

const Signup = () => {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    // handle submit form when validation
    const { email, password, userName } = values;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // sign in
        const user = userCredential.user;
        updateProfile(user, {
          displayName: userName,
          photoURL:
            'https://res.cloudinary.com/food-odering/image/upload/v1621587656/meals/dfpd8ekewliaxz4mtekk.png',
        })
          .then(() => {
            // update is succsess
            // redirect to login page
            navigate('/');
          })
          .catch((error) => {
            console.log('Error update user: ', error.message);
          });
      })
      .catch((error) => {
        // error
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode === 'auth/email-already-in-use') {
          alert('Email is already in use!');
        } else {
          console.log('Error create user', errorMessage);
        }
      });
  };

  useEffect(() => {
    // If logined => current url is /home and setUser
    const cookies = new Cookies();
    const user = cookies.get('user');

    if (user) {
      navigate('/home');
    }
  }, [navigate]);

  return (
    <Container>
      <Wrap>
        <LoginForm>
          <Formik
            initialValues={{
              userName: '',
              email: '',
              password: '',
              repeatPass: '',
            }}
            validateOnChange={false}
            validateOnBlur={true}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, validateForm, values, handleSubmit }) => (
              <Form onSubmit={handleSubmit} noValidate>
                <Logo>
                  <BsTwitter />
                  <h2>Create New Account</h2>
                </Logo>
                <ContentForm>
                  <Input
                    Icon={BsFillPersonFill}
                    type="text"
                    name="userName"
                    placeholder="Username"
                    validateFunc={validate.userName}
                    errorMessage={
                      errors.userName && touched.userName && errors.userName
                    }
                    touched={touched.userName}
                  />
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
                  <Input
                    Icon={BsFillShieldLockFill}
                    type="password"
                    name="repeatPass"
                    placeholder="Repeat Password"
                    validateFunc={(value) =>
                      validate.repeatPass(value, values.password)
                    }
                    errorMessage={
                      errors.repeatPass &&
                      touched.repeatPass &&
                      errors.repeatPass
                    }
                    touched={touched.repeatPass}
                  />
                  <LoginButton>
                    <Button type="submit" onClick={() => validateForm()}>
                      SIGNUP
                    </Button>
                  </LoginButton>
                  <ChooseOption>
                    <span>Have a account?</span>
                    <Link to="/">Login</Link>
                  </ChooseOption>
                </ContentForm>
              </Form>
            )}
          </Formik>
        </LoginForm>
      </Wrap>
    </Container>
  );
};

export default Signup;
