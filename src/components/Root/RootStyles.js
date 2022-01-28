import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 69rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 0.5rem;
  padding-right: 0.5rem;

  @media only screen and (min-width: 576px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (min-width: 768px) {
    max-width: 89rem;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 124rem;
  }
`;
