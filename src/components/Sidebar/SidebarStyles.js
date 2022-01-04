import styled from 'styled-components';
import { Avatar } from '../Feed/TweetBox/TweetBoxStyles';

export const Container = styled.aside`
  box-sizing: border-box;
  height: 100vh;
  width: 20%;
`;

export const Wrap = styled.div`
  border-right: 0.1rem solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
  position: fixed;
  top: 0;
`;

export const Logo = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.twitterColor};
  padding-right: 1.2rem;

  a {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.2rem;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    transition: color 0.2s ease-out;
    width: 5.2rem;

    &:hover {
      background-color: ${(props) => props.theme.itemHover};
    }
  }

  svg {
    height: 2.65rem;
    width: 2.65rem;
  }
`;

export const SidebarOptions = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.active ? props.theme.twitterColor : '#000')};
  cursor: pointer;
  padding: 1.2rem;
  transition: color 0.2s ease-out;

  span {
    font-size: 2rem;
    font-weight: 800;
    margin-left: 2rem;
    margin-right: 1.6rem;
  }

  svg {
    height: 2.65rem;
    width: 2.65rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.itemHover};
    border-radius: 999rem;
    color: ${(props) => props.theme.twitterColor};
  }
`;

export const User = styled.div`
  border-radius: 999rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: rgba(15, 20, 15, 0.1);
  }
`;

export const SmallAvatar = styled(Avatar)`
  flex-basis: 4rem;
  padding-top: 0;
  width: 4rem;

  img {
    height: 4rem;
    width: 4rem;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
