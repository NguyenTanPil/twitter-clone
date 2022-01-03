import styled from 'styled-components';

export const Container = styled.aside`
  border-right: 0.1rem solid ${(props) => props.theme.twitterBackgroundColor};
  flex: 0.3;
  padding-left: 2rem;
  padding-right: 2rem;
  /* width: 27.5rem; */
`;

export const Logo = styled.div`
  box-sizing: border-box;
  color: ${(props) => props.theme.twitterColor};
  /* padding-left: 1.2rem; */
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
      background-color: #e8f5fd;
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
    font-size: 2rem;
    font-weight: 800;
    margin-left: 2rem;
    margin-right: 1.6rem;
  }

  svg {
    height: 2.65rem;
    width: 2.65rem;
  }

  &:hover {
    background-color: #e8f5fe;
    border-radius: 999rem;
    color: ${(props) => props.theme.twitterColor};
  }
`;
