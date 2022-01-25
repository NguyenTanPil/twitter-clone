import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  margin-left: 5.2rem;
`;

const pulse = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export const ViewMore = styled.div`
  color: ${(props) => props.theme.fontColor};
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 1.6rem;
  padding-top: 0.5rem;
  transition: color 0.2s ease-out;
  width: fit-content;

  &:hover {
    color: ${(props) => props.theme.twitterColor};
  }

  span {
    font-size: 1.4rem;
    font-weight: 400;
  }

  svg {
    font-size: ${(props) => (props.loading ? '1rem' : '1.4rem')};
    margin-left: 0.375rem;
  }
`;

export const LoadingIcon = styled.div`
  height: 1rem;
  margin-left: 0.375rem;
  width: 1rem;

  svg {
    animation: ${pulse} 0.5s linear infinite;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  border-left: 0.2rem solid ${(props) => props.theme.twitterColor};
  padding-left: 1rem;
`;
