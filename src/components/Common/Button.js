import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.twitterColor};
  border: none;
  border-radius: 999rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 800;
  margin-top: 2rem;
  padding: 1.2rem;
  transition: background-color 0.2s ease-out;
  width: 100%;

  &:hover {
    background-color: #1a8cd8;
  }
`;
