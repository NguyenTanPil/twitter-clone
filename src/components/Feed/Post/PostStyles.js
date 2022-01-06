import styled from 'styled-components';

export const Container = styled.div`
  border-bottom: 0.1rem solid ${(props) => props.theme.border};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  max-width: 60rem;
  padding: 1.2rem;
  transition: background-color 0.2s ease-out;
  width: 100%;

  &:hover {
    background-color: rgba(0, 0, 0, 0.03);
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const DisplayName = styled.h3`
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 0.5rem 0 0;
`;

export const UserName = styled.span`
  color: #536471;
  font-size: 1.5rem;
  font-weight: 400;
  padding-left: 0;
  padding-right: 0.25rem;

  @media only screen and (min-width: 576px) {
    padding-left: 0.25rem;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const MoreIcon = styled.div`
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  height: 3.4rem;
  justify-content: center;
  margin-left: 2rem;
  transition: background-color 0.2s ease-out;
  width: 3.4rem;

  &:hover {
    background-color: ${(props) => props.theme.itemHover};
  }

  svg {
    font-size: 2rem;
    font-weight: 600;
  }
`;

export const Content = styled.p`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 0;
  margin-top: 0.5rem;

  @media only screen and (min-width: 576px) {
    margin-top: 0;
  }
`;

export const Body = styled.div`
  padding-bottom: 0.4rem;
  padding-top: 1.2rem;
  width: 100%;

  img {
    border-radius: 2rem;
    object-fit: contain;
    width: 100%;
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 42.5rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const Action = styled.div`
  color: #536471;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 400;
  transition: color 0.2s ease-out;

  &:hover {
    &:first-child {
      color: rgba(29, 155, 240, 1);

      div {
        background-color: rgba(29, 155, 240, 0.1);
      }
    }

    &:nth-child(2) {
      color: rgba(0, 186, 124, 1);

      div {
        background-color: rgba(0, 186, 124, 0.1);
      }
    }

    &:nth-child(3) {
      color: rgba(249, 24, 128, 1);

      div {
        background-color: rgba(249, 24, 128, 0.1);
      }
    }

    &:last-child {
      color: rgba(29, 155, 240, 1);

      div {
        background-color: rgba(29, 155, 240, 0.1);
      }
    }
  }

  div {
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.5rem;
    transition: background-color 0.2s ease-out;
    width: 3.5rem;
  }

  svg {
    height: 1.875rem;
    width: 1.875rem;
  }

  span {
    font-size: 1.3rem;
    font-weight: 500;
    line-height: 1.6rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
  }
`;
