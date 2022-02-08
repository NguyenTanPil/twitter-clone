import styled from 'styled-components';
import { Form as OverWrapForm } from '../TweetBox/TweetBoxStyles';

export const Container = styled.div``;

export const Form = styled(OverWrapForm)`
  box-sizing: border-box;
  padding-bottom: 1rem;
  width: 100%;

  & > div:first-child {
    padding: 0 0 0.5rem 0.6rem;
  }

  & > div:last-child {
    border-top: 1px solid ${(props) => props.theme.border};
    display: flex;
    align-items: flex-end;
    padding-left: 1.3rem;
    transition: border-top-color 0.2s ease-out;

    &:focus-within {
      border-top-color: ${(props) => props.theme.twitterColor};
    }

    textarea {
      background-color: ${(props) => props.theme.backgroundColor};
      border: none;
      color: ${(props) => props.theme.fontColor};
      flex-grow: 1;
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      font-weight: 500;
      line-height: 2.4rem;
      max-height: 10rem;
      outline: none;
      padding-bottom: 1.2rem;
      padding-top: 1.2rem;
      resize: none;
    }
  }
`;

export const SendAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4.4rem;
  width: 4.4rem;

  svg {
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    font-size: 2.2rem;
    font-weight: 600;
    transition: color 0.2s ease-out;

    &:hover {
      color: ${(props) => props.theme.twitterColor};
    }
  }
`;
