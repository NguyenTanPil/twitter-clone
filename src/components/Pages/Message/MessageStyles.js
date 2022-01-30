import styled from 'styled-components';
import { Container as Ctn } from '../Profile/ProfileStyles';

export const Container = styled(Ctn)`
  border-right: 0;
  padding-bottom: 0;

  @media only screen and (min-width: 992px) {
    width: 77.5%;
  }
`;

export const Body = styled.div`
  border-top: 0.1rem solid ${(props) => props.theme.border};
  display: flex;
`;

export const Conversation = styled.div`
  border-right: 0.1rem solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  width: 34rem;

  & > div:first-child {
    margin-left: 1.2rem;
    margin-right: 1.2rem;
  }
`;

export const ConversationItem = styled.div`
  cursor: pointer;
  display: flex;
  padding: 1.5rem 1.2rem;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${(props) => props.theme.itemHover};
  }
`;

export const PreviewConversation = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-around;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const UserName = styled.h4`
  color: ${(props) => props.theme.titleColor};
  font-size: 1.5rem;
  font-weight: 600;
  inline-size: 22rem;
  line-height: 2rem;
  margin-bottom: 0;
  margin-top: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const LastMessage = styled.span`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 1.8rem;
  inline-size: 22rem;
  margin-top: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const TimeLastMessage = styled.span`
  color: ${(props) => props.theme.fontColor};
  font-size: 1.2rem;
  font-weight: 500;
`;

export const Chat = styled.div`
  border-right: 0.1rem solid ${(props) => props.theme.border};
  padding-top: 2rem;
  height: calc(100vh - 7.2rem);
  width: calc(100% - 32rem);
`;

export const ChatHeader = styled.div`
  border-bottom: 0.1rem solid ${(props) => props.theme.border};
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
`;

export const Info = styled.div`
  h4 {
    font-size: 1.8rem;
  }

  span {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export const ChatView = styled.div`
  width: 100%;
`;

export const Messages = styled.div`
  box-sizing: border-box;
  padding-top: 2rem;
  padding-left: 1.2rem;
  padding-right: 1.2rem;
  width: 100%;
`;

export const MessageItem = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.me ? 'row-reverse' : 'row')};
  margin-bottom: 1.5rem;
  width: 100%;

  & > div:first-child {
    margin-left: ${(props) => (props.me ? '1.2rem' : '0')};
    margin-right: ${(props) => (props.me ? '0' : '1.2rem')};
  }
`;

export const MessageContent = styled.div`
  background-color: ${(props) => props.theme.border};
  border-radius: 1.6rem;
  padding: 1.2rem 1.6rem;
  max-width: calc(100% - 14rem);

  p {
    color: ${(props) => props.theme.fontColor};
    font-size: 1.4rem;
    font-weight: 400;
    margin: 0;
    width: fit-content;
  }
`;
