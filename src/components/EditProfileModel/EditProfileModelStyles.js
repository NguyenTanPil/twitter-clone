import styled from 'styled-components';
import { Background } from '../Pages/Profile/ProfileStyles';
import { Body } from '../GifModel/GifModelStyles';

export const Title = styled.div`
  span {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const BackgroundUpload = styled(Background)`
  padding-right: 0 !important;
  position: relative;

  img {
    display: block;
    height: auto;
    max-height: 19rem;
  }
`;

export const BodyAutoHeight = styled(Body)`
  margin-top: 1rem;

  & > div:nth-child(2) {
    width: 100%;
  }
`;

export const OverLoadUpload = styled.div`
  background-color: rgba(221, 221, 222, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  label {
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.4rem;
    transition: all 0.2s ease-out;
    width: 4.4rem;

    &:hover {
      background-color: ${(props) => props.theme.itemHover};

      svg {
        color: ${(props) => props.theme.twitterColor};
      }
    }

    input {
      height: 0;
      width: 0;
    }
  }

  svg {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const AvatarUpload = styled.div`
  & > div {
    height: 5rem;
    position: relative;

    & > div {
      border-radius: 50%;
      position: absolute;
      bottom: 20%;
      width: 100%;

      & > div {
        border-radius: 50%;
      }

      img {
        position: relative;
      }
    }
  }
`;

export const FormEdit = styled.div`
  padding-right: 0;
  width: 100%;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.6rem;

  label {
    color: #000;
    font-size: 1.6rem;
    font-weight: 500;
    margin-bottom: 0.8rem;
    text-transform: capitalize;
  }

  button {
    margin-left: auto;
    margin-top: 2rem;
    width: 10rem;
  }

  input {
    background-color: #fff;
    border: 0.1rem solid #d9d9d9;
    border-radius: 0.4rem;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
    font-size: 1.8rem;
    font-weight: 400;
    outline: none;
    padding: 1rem 1.2rem;
    transition: border-color 0.2s ease-out;
    width: 100%;

    &::placeholder {
      font-family: 'Poppins', sans-serif;
      font-size: 1.6rem;
      font-weight: 400;
    }

    &:focus-within {
      border-color: ${(props) => props.theme.twitterColor};
    }
  }
`;

export const LoadingEdit = styled.img`
  max-width: 50rem;
`;
