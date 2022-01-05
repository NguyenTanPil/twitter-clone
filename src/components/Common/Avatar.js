import styled from 'styled-components';

export const Avatar = styled.div`
  flex-basis: 4.8rem;
  margin-right: 1.2rem;
  padding-top: 0.4rem;
  width: 4.8rem;

  img {
    border-radius: 50%;
    cursor: pointer;
    display: block;
    height: 4.8rem;
    transition: opacity 0.2s ease-out;
    width: 4.8rem;

    &:hover {
      opacity: 0.8;
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
