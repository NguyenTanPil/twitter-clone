import styled from 'styled-components';

import { CloseButton as CloseBtn } from '../TweetBox/TweetBoxStyles';

export const Container = styled.div`
  background-color: rgba(91, 112, 131, 0.4);
  cursor: default;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  transition: all 0.2s ease-out 0.2s;
  width: 100vw;
  z-index: 2000;
`;

export const Content = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  height: calc(100vh - 4.8rem);
  max-width: 58rem;
  overflow: hidden;
  padding: 2.4rem 1.2rem;
  width: 100%;

  @media only screen and (min-width: 576px) {
    border-radius: 1.6rem;
    height: 80vh;
    padding: 2.4rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    margin: 0;
    width: calc(100% - 7.4rem);
  }
`;

export const CloseButton = styled(CloseBtn)`
  background-color: ${(props) => props.theme.border};
  color: ${(props) => props.theme.fontColor};
  position: static;

  &:hover {
    background-color: ${(props) => props.theme.itemHover};
    color: ${(props) => props.theme.twitterColor};
  }
`;

export const Body = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: calc(100% - 7.6rem);
  margin-top: 3rem;
  overflow-y: scroll;

  & > div:nth-child(odd) {
    padding-right: 0.5rem;
  }

  & > div:nth-child(even) {
    padding-left: 0.5rem;
  }
`;

export const GifContainer = styled.div`
  box-sizing: border-box;
  cursor: pointer;
  padding-bottom: 0.5rem;
  transition: transform 0.2s ease-out;
  width: 50%;

  div {
    border-radius: 1.6rem;
    box-sizing: border-box;
    height: 100%;
    overflow: hidden;
    width: 100%;
  }

  & > div:hover {
    img {
      transform: scale(1.1);
    }
  }

  img {
    border-radius: 1.6rem;
    display: block;
    height: 16rem;
    object-fit: cover;
    width: 100%;
  }
`;
