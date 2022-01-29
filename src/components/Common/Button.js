import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) => props.theme.twitterColor};
  border: none;
  border-radius: 999rem;
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 800;
  letter-spacing: 0.1rem;
  margin-top: 2rem;
  padding: 1.2rem;
  transition: opacity 0.2s ease-out;
  width: 100%;

  &:hover {
    opacity: 0.9;
  }
`;

export const SubmitButton = styled(Button)`
  font-size: 1.4rem;
  font-weight: 600;
  margin-top: 0;
  min-height: 3.6rem;
  min-width: 3.6rem;
  padding: 0 1.6rem;
`;

export const FollowButton = styled(SubmitButton)`
  background-color: ${(props) => props.theme.titleColor};
  color: ${(props) => props.theme.border};
  min-height: 3.2rem;
  min-width: 3.2rem;

  &:hover {
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.titleColor};
  }
`;
