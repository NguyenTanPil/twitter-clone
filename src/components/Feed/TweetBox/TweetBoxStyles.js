import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
`;

export const Avatar = styled.div`
  flex-basis: 4.8rem;
  margin-right: 1.2rem;
  padding-top: 0.4rem;
  width: 4.8rem;

  img {
    border-radius: 50%;
    display: block;
    width: 100%;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Input = styled.div`
  box-sizing: border-box;
  height: 5.6rem;

  input {
  }
`;
