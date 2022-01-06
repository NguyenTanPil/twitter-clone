import styled from 'styled-components';

export const Avatar = styled.div`
  flex-basis: 4rem;
  margin-right: 1.2rem;
  padding-top: 0.4rem;
  width: 4rem;

  img {
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 4rem;
    transition: opacity 0.2s ease-out;
    width: 4rem;

    &:hover {
      opacity: 0.8;
    }
  }

  @media only screen and (min-width: 576px) {
    flex-basis: 4.8rem;
    width: 4.8rem;

    img {
      height: 4.8rem;
      width: 4.8rem;
    }
  }
`;

export const SmallAvatar = styled(Avatar)`
  flex-basis: 4rem;
  padding-top: 0;
  width: 4rem;

  img {
    height: 4rem;
    width: 4rem;
  }
`;
