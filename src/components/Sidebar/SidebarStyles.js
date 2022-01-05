import styled from 'styled-components';

export const Container = styled.aside`
  height: 100vh;
  min-width: 8.4rem;
  max-width: 27.5rem;

  @media only screen and (min-width: 1280px) {
    width: 22.5%;
  }
`;

export const Wrap = styled.div`
  background-color: #fff;
  border-right: 0.1rem solid ${(props) => props.theme.border};
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  max-width: 27.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  position: fixed;
  top: 0;

  @media only screen and (min-width: 1280px) {
    padding-left: 0;
    padding-right: 2rem;
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      height: 5rem;
      width: 5rem;

      span {
        display: none;
      }

      svg {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    @media only screen and (min-width: 1280px) {
      align-items: flex-start;

      button {
        height: inherit;
        width: 100%;

        svg {
          display: none;
        }

        span {
          display: inline-block;
        }
      }
    }
  }
`;

export const Logo = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.twitterColor};
  padding-right: 1.2rem;

  a {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5.2rem;
    margin-bottom: 0.2rem;
    margin-top: 0.2rem;
    transition: color 0.2s ease-out;
    width: 5.2rem;

    &:hover {
      background-color: ${(props) => props.theme.itemHover};
    }
  }

  svg {
    height: 2.65rem;
    width: 2.65rem;
  }
`;

export const SidebarOptions = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => (props.active ? props.theme.twitterColor : '#000')};
  cursor: pointer;
  padding: 1.2rem;
  transition: color 0.2s ease-out;

  span {
    display: none;
    font-size: 2rem;
    font-weight: 800;
    margin-left: 2rem;
    margin-right: 1.6rem;

    @media only screen and (min-width: 1280px) {
      display: inline-block;
    }
  }

  svg {
    height: 2.65rem;
    width: 2.65rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.itemHover};
    border-radius: 999rem;
    color: ${(props) => props.theme.twitterColor};
  }
`;

export const User = styled.div`
  border-radius: 999rem;
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  padding: 1.2rem;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: rgba(15, 20, 15, 0.1);
  }

  & > div:first-child {
    margin-right: 0;
  }
  & > div:nth-child(2),
  & > div:last-child {
    display: none;
  }

  @media only screen and (min-width: 1280px) {
    & > div:nth-child(2),
    & > div:last-child {
      display: block;
    }

    & > div:first-child {
      margin-right: 1.2rem;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;
