import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  & > div:first-child {
    margin-left: 1.6rem;
  }

  & > div:nth-child(2) {
    margin-right: 1.6rem;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 9.2rem);
`;

export const Input = styled.div`
  box-sizing: border-box;

  input {
    background-color: ${(props) => props.theme.backgroundColor};
    border: none;
    box-sizing: border-box;
    color: ${(props) => props.theme.fontColor};
    font-size: 2rem;
    font-weight: 500;
    line-height: 2.4rem;
    outline: none;
    padding-bottom: 0.8rem;
    padding-top: 1.2rem;
    width: 100%;
  }

  @media only screen and (min-width: 576px) {
    /* height: 5.6rem; */

    input {
      padding-bottom: 0.8rem;
      padding-top: 1.6rem;
    }
  }
`;

export const Options = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const OptionWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.6rem;

  @media only screen and (min-width: 576px) {
    margin-top: 1.2rem;
  }
`;

export const Option = styled.label`
  position: relative;

  & > div:first-child {
    border-radius: 50%;
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    height: 3.4rem;
    opacity: ${(props) => (props.disabled ? '0.5' : '1')};
    transition: background-color 0.2s ease-out;
    width: 3.4rem;

    &:hover {
      background-color: ${(props) =>
        props.disabled ? 'transparent' : props.theme.itemHover};
    }

    input {
      width: 0;
    }

    svg {
      color: ${(props) => props.theme.twitterColor};
      font-size: 1.8rem;
    }
  }
`;

export const OptionSubmit = styled.div`
  button {
    cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};
    opacity: ${(props) => (props.disabled ? '0.5' : '1')};

    &:hover {
      background-color: ${(props) =>
        props.disabled ? props.theme.twitterColor : '#1a8cd8'};
    }
  }

  @media only screen and (min-width: 576px) {
    margin-top: 1.2rem;
    padding-left: 1.2rem;
  }
`;

export const Preview = styled.div`
  padding-bottom: 0.4rem;
  padding-top: 1.2rem;
  position: relative;
  transition: all 0.2s ease;
  width: 100%;

  img,
  video {
    border-radius: 2rem;
    object-fit: contain;
    width: 100%;
  }
`;

export const CloseButton = styled.div`
  border-radius: 999rem;
  background-color: #fff;
  color: ${(props) => props.theme.twitterColor};
  display: ${(props) => (props.hideInPhone ? 'none' : 'flex')};
  align-items: center;
  cursor: pointer;
  padding: 1.2rem;
  position: absolute;
  right: 2rem;
  top: 2rem;
  transition: all 0.2s ease-out;
  z-index: 1008;

  &:hover {
    background-color: ${(props) => props.theme.border};
  }

  svg {
    height: 2rem;
    width: 2rem;
  }
`;

export const LoadingNewPost = styled.div`
  border-top: 0.1rem solid ${(props) => props.theme.border};
  display: flex;
  justify-content: center;
  height: ${(props) => (props.loading ? '7.6rem' : '0')};
  overflow: hidden;
  margin-top: 1.6rem;
  transition: height 0.2s ease-out;
  width: 100%;

  img {
    width: 6rem;
  }
`;

export const ReplyTo = styled.div`
  height: 3.5rem;

  & > div {
    color: ${(props) => props.theme.fontColor};
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 400;
    width: fit-content;
  }

  span:nth-child(2) {
    background-color: ${(props) => props.theme.border};
    border-radius: 0.4rem;
    display: inline-block;
    color: ${(props) => props.theme.twitterColor};
    margin-left: 1rem;
    padding: 0.6rem 1.2rem;
  }

  span:last-child {
    background-color: ${(props) => props.theme.border};
    border-radius: 50%;
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    height: 1.4rem;
    margin-left: 0.5rem;
    padding: 1rem;
    transition: all 0.2s ease-out;

    &:hover {
      background-color: ${(props) => props.theme.itemHover};
      color: ${(props) => props.theme.twitterColor};
    }

    svg {
      font-size: 1.6rem;
    }
  }
`;
