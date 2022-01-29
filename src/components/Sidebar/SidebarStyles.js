import styled from 'styled-components';
import { MoreIcon } from '../Feed/Post/PostStyles';
import { NavLink } from 'react-router-dom';

export const Container = styled.aside`
  @media only screen and (min-width: 576px) {
    max-width: 27.5rem;
    min-width: 8.4rem;
  }

  @media only screen and (min-width: 1280px) {
    width: 22.5%;
  }
`;

export const Wrap = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  border-right: 0.1rem solid ${(props) => props.theme.border};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 1rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1008;

  @media only screen and (min-width: 576px) {
    bottom: auto;
    height: 100%;
    max-width: 8.4rem;
    top: 0;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 27.5rem;
    padding-left: 0;
    padding-right: 2rem;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      display: none;
      height: 5rem;
      width: 5rem;

      @media only screen and (min-width: 576px) {
        display: block;
      }

      span {
        display: none;
      }

      svg {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    @media only screen and (min-width: 1280px) {
      align-items: flex-start;

      button {
        height: inherit;
        width: 100%;

        svg {
          display: none;
        }

        span {
          display: inline-block;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  box-sizing: border-box;
  display: none;
  color: ${(props) => props.theme.twitterColor};

  @media only screen and (min-width: 576px) {
    display: block;
  }

  @media only screen and (min-width: 992px) {
    padding-right: 1.2rem;
  }

  a {
    border-radius: 50%;
    color: #1d9bf0;
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
  flex-direction: row;
  justify-content: space-around;
  width: 100%;

  @media only screen and (min-width: 576px) {
    flex-direction: column;
    justify-content: inherit;
    width: auto;
  }
`;

export const OptionContainer = styled.div`
  display: ${(props) => (props.hideInPhone ? 'none' : 'block')};

  @media only screen and (min-width: 576px) {
    display: block;
  }
`;

export const OptionContent = styled(NavLink)`
  border-radius: 999rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 1.2rem;
  transition: color 0.2s ease-out;

  &.active {
    svg {
      color: ${(props) => props.theme.twitterColor};
    }
  }

  span {
    color: ${(props) => props.theme.fontColor};
    display: none;
    font-size: 2rem;
    font-weight: 800;
    margin-left: 2rem;
    margin-right: 1.6rem;

    @media only screen and (min-width: 1280px) {
      display: inline-block;
    }
  }

  svg {
    color: ${(props) => props.theme.fontColor};
    height: 2.65rem;
    width: 2.65rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.itemHover};

    svg {
      color: ${(props) => props.theme.twitterColor};
    }
  }
`;

export const CurrentUser = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 0.1rem solid ${(props) => props.theme.border};
  padding: 1.4rem 2rem;
`;

export const CheckIcon = styled(MoreIcon)`
  color: ${(props) => props.theme.twitterColor};
  cursor: default;
  flex-grow: 1;
  justify-content: flex-end;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const User = styled(CurrentUser)`
  border-bottom: 0;
  border-radius: 999rem;
  display: none;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
  position: relative;
  transition: background-color 0.2s ease-out;

  @media only screen and (min-width: 576px) {
    display: flex;
  }

  &:hover {
    background-color: ${(props) => props.theme.itemHover};

    & > div:last-child {
      transform: scale(1);
    }
  }

  & > div:first-child {
    margin-right: 0;
  }

  & > div:nth-child(2),
  & > div:nth-child(3) {
    display: none;
  }

  @media only screen and (min-width: 1280px) {
    & > div:nth-child(2),
    & > div:nth-child(3) {
      display: block;
    }

    & > div:first-child {
      margin-right: 1.2rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SignOut = styled.div`
  position: absolute;
  left: 0;
  bottom: 100%;
  transform: scale(0);
  transition: transform 0.2s ease-out;
  width: 30rem;

  & > div {
    background-color: ${(props) => props.theme.backgroundColor};
    border: 0.1rem solid ${(props) => props.theme.border};
    border-radius: 1.6rem;
    box-shadow: rgba(60, 64, 67, 0.3) 0 0.1rem 0.2rem 0,
      rgba(60, 64, 67, 0.15) 0 0.2rem 0.6rem 0.2rem;
    display: flex;
    flex-direction: column;
    position: relative;

    &:before {
      background: ${(props) => props.theme.backgroundColor};
      border-bottom: 0.1rem solid ${(props) => props.theme.border};
      border-right: 0.1rem solid ${(props) => props.theme.border};
      display: block;
      content: '';
      height: 1.414rem;
      position: absolute;
      left: 2.25rem;
      bottom: -0.8rem;
      transform: rotate(45deg);
      width: 1.414rem;
      z-index: 1;
    }

    & > span {
      color: ${(props) => props.theme.fontColor};
      cursor: pointer;
      font-size: 1.5rem;
      font-weight: 500;
      padding: 1.2rem 2rem 0.6rem;
      transition: color 0.2s ease-out;

      &:last-child {
        padding-bottom: 1.2rem;
        padding-top: 0.6rem;
      }

      &:hover {
        color: ${(props) => props.theme.twitterColor};
      }
    }
  }
`;
