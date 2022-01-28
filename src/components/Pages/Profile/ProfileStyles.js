import styled from 'styled-components';
import { Header as FeedHeader } from '../../Feed/FeedStyles';

export const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  border-right: 0.1rem solid ${(props) => props.theme.border};
  color: ${(props) => props.theme.titleColor};
  flex-grow: 1;
  padding-bottom: 5rem;
  width: calc(100% - 8.4rem);

  @media only screen and (min-width: 992px) {
    width: 47.5%;
  }
`;

export const Header = styled(FeedHeader)`
  background-color: ${(props) => props.theme.backgroundColor};

  & > a {
    margin-right: 2rem;

    &:hover {
      svg {
        color: ${(props) => props.theme.twitterColor};
      }
    }

    svg {
      color: ${(props) => props.theme.fontColor};
    }
  }

  h2 {
    cursor: default;
    flex-grow: 0;
  }
`;

export const DetailInfo = styled.div``;

export const Background = styled.div`
  width: 100%;

  img {
    height: 15rem;
    object-fit: cover;
    width: 100%;

    @media only screen and (min-width: 576px) {
      height: 20rem;
    }

    @media only screen and (min-width: 768px) {
      height: 25rem;
    }

    @media only screen and (min-width: 992px) {
      height: 20rem;
    }
  }
`;

export const Detail = styled.div`
  padding: 1.2rem 1.6rem;
`;

export const AvatarAndEdit = styled.div`
  display: flex;
  justify-content: space-between;
  height: 6rem;
  margin-bottom: 1rem;
`;

export const Avatar = styled.div`
  max-width: 14rem;
  position: relative;
  width: 35%;

  img {
    border-radius: 50%;
    cursor: pointer;
    display: block;
    max-height: 14rem;
    object-fit: cover;
    position: absolute;
    bottom: 20%;
    transition: opacity 0.2s ease-out;
    width: 100%;

    &:hover {
      opacity: 0.9;
    }
  }

  @media only screen and (min-width: 576px) {
    width: 25%;
  }
`;

export const EditProfile = styled.div`
  button {
    background-color: ${(props) => props.theme.backgroundColor};
    border: 0.1rem solid ${(props) => props.theme.twitterColor};
    border-radius: 999rem;
    color: ${(props) => props.theme.twitterColor};
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: 600;
    outline: none;
    padding: 0.8rem 1rem;
    transition: background-color 0.2s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.itemHover};
    }

    @media only screen and (min-width: 576px) {
      font-size: 1.5rem;
      padding: 1.2rem 1.6rem;
    }
  }
`;
export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;

  h2 {
    margin: 0;
    font-size: 2rem;
    font-weight: 700;
  }

  span {
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: center;
    font-size: 1.5rem;

    &:last-child {
      margin-top: 1rem;
    }

    svg {
      font-size: 1.8rem;
      margin-right: 0.75rem;
    }
  }
`;

export const FollowInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const FollowCount = styled.div`
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  font-size: 1.5rem;
  margin-right: 2rem;

  &:last-child {
    margin-right: 0;
  }

  span {
    color: ${(props) => props.theme.titleColor};
    font-weight: 600;
  }
`;
