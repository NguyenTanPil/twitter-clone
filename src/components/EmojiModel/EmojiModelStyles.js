import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  left: -12.3rem;
  top: 125%;
`;

export const Content = styled.div`
  position: relative;
  z-index: 2000;

  &:before {
    border-style: solid;
    border-width: 0 1rem 1rem 1rem;
    border-color: transparent transparent ${(props) => props.theme.itemHover}
      transparent;
    content: '';
    position: absolute;
    right: calc(50% - 1rem);
    top: -0.8rem;
  }

  aside {
    background-color: ${(props) => props.theme.itemHover};
    box-shadow: rgba(60, 64, 67, 0.3) 0 0.1rem 0.2rem 0,
      rgba(60, 64, 67, 0.15) 0 0.2rem 0.6rem 0.2rem;

    ul:before,
    input {
      background: ${(props) => props.theme.itemHover} !important;
    }

    input.emoji-search {
      border-color: #d6d6d6;

      &:focus {
        border-color: ${(props) => props.theme.twitterColor};
      }
    }
  }
`;

export const OverWrap = styled.div`
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 1008;
`;
