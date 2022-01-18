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
  }
`;

export const BodyAutoHeight = styled(Body)`
  height: auto;
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

  div {
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
