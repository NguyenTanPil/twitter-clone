import styled from 'styled-components';
import logoBackground from './bg.svg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  padding: 0.6rem;
`;

export const Wrap = styled.div`
  border-radius: 1.5rem;
  max-width: 100rem;
  padding: 1.8rem 0.6rem 0.6rem;

  @media only screen and (min-width: 576px) {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
      rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    padding: 4.8rem;
  }

  @media only screen and (min-width: 1200px) {
    width: 200%;
  }
`;

export const LoginForm = styled.div`
  display: flex;
  justify-content: flex-end;

  form {
    padding: 1rem;
  }

  @media only screen and (min-width: 1200px) {
    background-image: url(${logoBackground});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: left bottom;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  svg {
    color: ${(props) => props.theme.twitterColor};
    font-size: 3rem;
    font-weight: 700;
  }

  h2 {
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 1rem;

    @media only screen and (min-width: 576px) {
      font-size: 3rem;
      margin-bottom: 2rem;
      margin-top: 1.4rem;
    }
  }
`;

export const ContentForm = styled.div`
  width: 100%;

  @media only screen and (min-width: 768px) {
    min-width: 36rem;
  }
`;

export const InputGroup = styled.div`
  border-bottom: 0.2rem solid #d9d9d9;
  color: #d9d9d9;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding-bottom: 0.6rem;
  transition: border-color 0.2s ease-out 0s;

  &:focus-within {
    border-color: ${(props) => props.theme.twitterColor};

    svg {
      color: ${(props) => props.theme.twitterColor};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
  }

  svg {
    font-size: 2rem;
    height: 2rem;
    transition: color 0.2s ease-out;
    width: 2rem;
  }

  input {
    border: 0;
    color: ${(props) => props.theme.fontColor};
    font-size: 1.8rem;
    font-weight: 700;
    outline: none;
    padding: 1rem 1.2rem 0.6rem 1.2rem;
    width: 100%;
  }
`;

export const LoginButton = styled.div`
  button {
    border-radius: 0.4rem;
    margin-top: 3rem;
  }
`;

export const Or = styled.div`
  display: flex;
  align-items: center;
  margin: 1.4rem 0;
  padding: 1rem 0;

  div {
    background-color: #d9d9d9;
    height: 0.1rem;
    flex-grow: 1;
  }

  span {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.6rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const MiddleLogin = styled.div`
  background-color: ${(props) => (props.facebook ? '#4267b2' : '#4285f4')};
  border: 0.1rem solid ${(props) => (props.facebook ? '#4267b2' : '#4285f4')};
  border-radius: 0.4rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => (props.facebook ? '#4873c8' : '#1266f1')};
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.8rem;

    &:first-child {
      background-color: #fff;
      border-radius: 0.4rem 0 0 0.4rem;
      width: 4.8rem;
    }

    &:last-child {
      width: calc(100% - 4.8rem);
    }

    svg {
      color: ${(props) => (props.facebook ? '#4267b2' : '')};
      font-size: 1.8rem;
    }
  }

  span {
    color: #fff;
    font-size: 1.4rem;
    font-weight: 600;
    text-transform: uppercase;

    @media only screen and (min-width: 576px) {
      font-size: 1.6rem;
    }
  }
`;
