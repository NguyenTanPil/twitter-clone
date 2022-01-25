import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: calc(100% - 6.88rem);

  & > div:first-child {
    background-color: ${(props) => props.theme.border};
    border-radius: 1.6rem;
    padding: 1rem 1.6rem;
    width: fit-content;
  }

  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0;

    span {
      color: ${(props) => props.theme.twitterColor};
    }
  }
`;

export const UserName = styled.span`
  color: #000;
  font-size: 1.3rem;
  font-weight: 600;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1.6rem;
  margin-top: 0.875rem;
  width: fit-content;

  span {
    color: ${(props) => props.theme.twitterColor};
    cursor: pointer;
    font-size: 1.2rem;
    margin-right: 0.875rem;
    text-transform: capitalize;
    transition: text-decoration 0.2s ease-out;

    &:hover {
      text-decoration: underline;
    }

    &:last-child {
      color: ${(props) => props.theme.fontColor};
      cursor: default;

      &:hover {
        text-decoration: none;
      }
    }
  }
`;
