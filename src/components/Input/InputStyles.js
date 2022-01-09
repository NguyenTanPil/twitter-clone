import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputGroup = styled.div`
  border-bottom: 0.2rem solid #d9d9d9;
  color: #d9d9d9;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;
  padding-bottom: 0.6rem;
  transition: border-color 0.2s ease-out 0s;

  &:focus-within {
    border-color: ${(props) => props.theme.twitterColor};

    svg {
      color: ${(props) => props.theme.twitterColor};
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4rem;
    width: 4rem;
  }

  svg {
    font-size: 2rem;
    height: 2rem;
    transition: color 0.2s ease-out;
    width: 2rem;
  }

  input {
    appearance: auto !important;
    background-color: #fff !important;
    border: 0;
    color: ${(props) => props.theme.fontColor} !important;
    font-size: 1.8rem;
    font-weight: 700;
    outline: none;
    padding: 1rem 1.2rem 0.6rem 1.2rem;
    width: 100%;
  }
`;

export const ErrorMessage = styled.div`
  height: 0;
  overflow: hidden;
  transition: height 0.2s ease-out 0s;

  div {
    padding: 0.75rem 0.5rem 0.5rem 4.5rem;
  }

  span {
    color: #f55d7a;
    font-size: 1.2rem;
  }
`;

export const NofiIcon = styled.div`
  position: absolute;
  right: 1.2rem;
  top: 2.8rem;

  svg {
    color: ${(props) => (props.error ? '#f55d7a' : '#0fb56d')};
    font-size: 1.8rem;
    font-weight: 600;
  }
`;
