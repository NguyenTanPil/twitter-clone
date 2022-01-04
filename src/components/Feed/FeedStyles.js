import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  border-right: 0.1rem solid ${(props) => props.theme.border};
  padding-bottom: 5rem;
  width: 50%;
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

  div {
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
