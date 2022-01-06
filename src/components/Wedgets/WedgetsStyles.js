import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  margin-left: 0;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;

  @media only screen and (min-width: 576px) {
    margin-left: 8.4rem;
  }

  @media only screen and (min-width: 992px) {
    margin-left: 0;
    padding-left: 2rem;
    padding-right: 0;
    width: 30%;
  }
`;

export const SearchInput = styled.div`
  background-color: #eff3f4;
  border: 0.1rem solid transparent;
  border-radius: 999rem;
  display: flex;
  margin-bottom: 1.2rem;
  margin-top: 0.6rem;
  position: sticky;
  top: 0.6rem;
  transition: border 0.2s ease-out;

  &:focus-within {
    border-color: ${(props) => props.theme.twitterColor};

    svg {
      color: ${(props) => props.theme.twitterColor};
    }
  }

  div {
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 4.4rem;

    svg {
      color: #536471;
      font-size: 2rem;
      min-width: 3.2rem;
      padding-left: 1.2rem;
      transition: color 0.2s ease-out;
    }
  }

  input {
    background-color: transparent;
    color: ${(props) => props.theme.fontColor};
    border: none;
    flex-grow: 1;
    font-size: 1.4rem;
    font-weight: 400;
    outline: none;
    padding: 1.2rem;
  }
`;

export const Trends = styled.div`
  background-color: rgb(247, 249, 249);
  border-radius: 1.6rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  & > div:last-child {
    border-radius: 0 0 1.6rem 1.6rem;
    padding: 1.6rem;
  }
`;

export const TrendsTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;

  h3 {
    font-size: 2rem;
    font-weight: 700;
    line-height: 2.4rem;
    margin: 0;
  }

  div {
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.4rem;
    transition: background-color 0.2s ease-out;
    width: 3.4rem;

    &:hover {
      background-color: rgba(15, 20, 15, 0.1);
    }
  }

  svg {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const TrendItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  transition: background 0.2s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  div:last-child {
    margin-top: -0.6rem;
  }

  & > span {
    color: ${(props) => props.theme.twitterColor};
    font-size: 1.5rem;
    font-weight: 600;
  }
`;

export const TrendInfo = styled.div`
  span {
    font-size: 1.3rem;
    font-weight: 400;
  }

  h4 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    padding-bottom: 0.2rem;
    padding-top: 0.2rem;
  }
`;

export const Follows = styled(Trends)`
  position: sticky;
  top: 6rem;
`;

export const FollowItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }

  &:last-child {
    border-radius: 0 0 1.6rem 1.6rem;
    padding: 1.6rem;
  }

  & > div:first-child {
    display: flex;
    align-items: center;
  }

  & > div:last-child {
    display: flex;
    align-items: center;
    height: 5.2rem;
  }
`;
