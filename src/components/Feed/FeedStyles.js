import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  border-right: 0.1rem solid ${(props) => props.theme.border};
  flex-grow: 1;
  padding-bottom: 5rem;
  width: calc(100% - 8.4rem);

  @media only screen and (min-width: 992px) {
    width: 47.5%;
  }
`;

export const Header = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  height: 5rem;
  max-width: 100rem;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  position: sticky;
  top: 0;
  z-index: 1008;

  h2 {
    flex-grow: 1;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > div,
  & > a {
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.6rem;
    transition: color 0.2s ease-out;
    width: 3.6rem;

    svg {
      color: ${(props) => props.theme.twitterColor};
      font-size: 1.5rem;
      font-weight: 700;
      height: 2rem;
      width: 2rem;
    }

    &:hover {
      background-color: #e8f5fd;
    }
  }
`;

export const LoadingPosts = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
`;
