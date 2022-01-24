import styled from 'styled-components';

export const Body = styled.div`
  margin-top: 1rem;

  & > div:first-child {
    padding: 0;
  }
`;

export const CommentContainer = styled.div`
  margin-top: 2rem;
  overflow-y: auto;
  height: calc(80vh - 10.5rem);

  @media only screen and (min-width: 576px) {
    height: calc(80vh - 22.5rem);
  }
`;

export const CommentItem = styled.div``;

export const NotComments = styled.div`
  font-size: 1.8rem;
  text-align: center;
  padding-bottom: 1rem;
  padding-top: 1rem;
  width: 100%;

  @media only screen and (min-width: 576px) {
    font-size: 2.5rem;
  }
`;
