import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  position: absolute;
  left: calc(100% - (29rem / 2) - 4.9rem);
  top: 125%;

  @media only screen and (min-width: 576px) {
    left: calc(100% - (33.8rem / 2) - 1.9rem);
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 2000;

  &:before {
    background: ${(props) => props.theme.backgroundColor};
    border-left: 0.1rem solid ${(props) => props.theme.border};
    border-top: 0.1rem solid ${(props) => props.theme.border};
    display: block;
    content: '';
    height: 1.414rem;
    position: absolute;
    top: -0.8rem;
    right: calc(50% - 4rem);
    transform: rotate(45deg);
    width: 1.414rem;
    z-index: 1;

    @media only screen and (min-width: 576px) {
      right: calc(50% - 1rem);
    }
  }

  section.emoji-mart {
    background-color: ${(props) => props.theme.backgroundColor};
    border-color: ${(props) => props.theme.border};
    box-shadow: rgb(60 64 67 / 30%) 0 0.1rem 0.2rem 0,
      rgb(60 64 67 / 15%) 0 0.2rem 0.6rem 0.2rem;
    width: 29rem !important;

    @media only screen and (min-width: 576px) {
      width: 33.8rem !important;
    }

    .emoji-mart-bar {
      border-color: ${(props) => props.theme.border};
    }
    .emoji-mart-anchor {
      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.twitterColor};
      }
    }

    .emoji-mart-search {
      margin-top: 1rem;
    }

    .emoji-mart-search input {
      background-color: ${(props) => props.theme.backgroundColor};
      border-color: ${(props) => props.theme.border};
      color: ${(props) => props.theme.fontColor};

      &:focus {
        border-color: ${(props) => props.theme.twitterColor};
      }
    }

    .emoji-mart-search-icon svg {
      color: ${(props) => props.theme.fontColor};
    }

    .emoji-mart-category-label span {
      background-color: ${(props) => props.theme.backgroundColor};
      color: ${(props) => props.theme.fontColor};
      padding-bottom: 1rem;
      padding-top: 1rem;
    }

    .emoji-mart-emoji {
      &:hover:before {
        cursor: pointer;
        background-color: ${(props) => props.theme.itemHover};
      }

      span {
        cursor: pointer;
      }
    }

    .emoji-mart-preview-name {
      color: ${(props) => props.theme.titleColor};
    }

    .emoji-mart-anchor-selected {
      color: ${(props) => props.theme.twitterColor} !important;

      .emoji-mart-anchor-bar {
        background-color: ${(props) => props.theme.twitterColor} !important;
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
