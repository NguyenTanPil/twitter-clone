import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 0.1rem solid ${(props) => props.theme.border};
  display: flex;
  padding-bottom: 1.6rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Input = styled.div`
  box-sizing: border-box;
  height: 4.2rem;

  input {
    border: none;
    box-sizing: border-box;
    font-size: 2rem;
    font-weight: 400;
    line-height: 2.4rem;
    outline: none;
    padding-bottom: 0.8rem;
    padding-top: 1.2rem;
    width: 100%;
  }

  @media only screen and (min-width: 576px) {
    height: 5.6rem;

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

export const Option = styled.div`
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  height: 3.4rem;
  transition: background-color 0.2s ease-out;
  width: 3.4rem;

  &:hover {
    background-color: #e8f5fd;
  }

  svg {
    color: ${(props) => props.theme.twitterColor};
    font-size: 1.8rem;
  }
`;

export const OptionSubmit = styled.div`
  @media only screen and (min-width: 576px) {
    margin-top: 1.2rem;
    padding-left: 1.2rem;
  }
`;
