import styled from 'styled-components';

export const Body = styled.div`
  padding: 1.2rem 0;

  & > div {
    padding-left: 3.2rem;
    padding-right: 3.2rem;
  }
`;

export const Intro = styled.div`
  text-align: center;
  border-bottom: 0.1rem solid ${(props) => props.theme.border};

  h2 {
    font-size: 2.4rem;
    font-weight: 600;
    margin-bottom: 1.2rem;
    margin-top: 1.6rem;
  }

  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.4rem;
    margin-bottom: 2rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 50rem;
  }
`;

export const Customize = styled.div``;

export const CustomizeItem = styled.div`
  padding-bottom: 1.2rem;
  padding-top: 1.2rem;

  & > label {
    color: ${(props) => props.theme.fontColor};
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
`;

export const ColorPicker = styled.div`
  background-color: ${(props) => props.theme.shapeColor};
  border-radius: 1.4rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 0.8rem;
  padding-top: 0.8rem;

  div {
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    width: calc(100% / 3);

    &:nth-child(2) {
      label {
        background-color: #ffd400;
      }
    }

    &:nth-child(3) {
      label {
        background-color: #f91880;
      }
    }

    &:nth-child(4) {
      label {
        background-color: #7856ff;
      }
    }

    &:nth-child(5) {
      label {
        background-color: #ff7a00;
      }
    }

    &:last-child {
      label {
        background-color: #00ba7c;
      }
    }

    @media only screen and (min-width: 768px) {
      width: auto;
    }
  }

  label {
    margin: 0 auto;
  }
`;

export const PickerItem = styled.div`
  border-color: ${(props) =>
    props.active ? props.theme.twitterColor : props.theme.fontColor} !important;
  position: relative;

  label {
    background-color: #1d9bf0;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.4rem;
    width: 4.4rem;
  }

  input {
    display: none;
  }

  svg {
    color: #fff;
    font-size: 2rem;
    ${(props) =>
      props.active
        ? 'font-size: 1.2rem !important; color: #fff !important;'
        : ''};
    font-weight: 600;
  }
`;

export const BackgroundPicker = styled(ColorPicker)`
  padding: 1.3rem 1.2rem;

  div {
    background-color: #fff;
    border: 0.2rem solid ${(props) => props.theme.border};
    border-radius: 0.6rem;
    box-sizing: border-box;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    margin: 0.4rem;
    padding-left: 2rem;
    padding-right: 2rem;
    width: 100%;

    &:nth-child(2) {
      background-color: #15202b;

      span {
        color: #fff;
      }

      label {
        background-color: ${(props) => props.theme.twitterColor};
      }

      svg {
        color: #15202b;
      }
    }

    &:last-child {
      background-color: #000;

      span {
        color: #fff;
      }

      label {
        background-color: ${(props) => props.theme.twitterColor};
      }

      svg {
        color: #000;
      }
    }

    @media only screen and (min-width: 576px) {
      width: 30%;
    }
  }

  label {
    height: 2rem;
    width: 2rem;

    svg {
      font-size: 1.7rem;
    }
  }

  input {
    display: block;
    cursor: pointer;
    height: 100%;
    margin: 0;
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
  }

  span {
    flex-grow: 1;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
    text-transform: capitalize;
  }
`;
