import { Header } from '../Profile/ProfileStyles';
import {
  Container,
  Body,
  Conversation,
  ConversationItem,
  Chat,
  PreviewConversation,
  UserName,
  LastMessage,
  TimeLastMessage,
  ChatHeader,
  ChatView,
  Info,
  MessageItem,
  Messages,
  MessageContent,
} from './MessageStyles';
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { NavLink } from 'react-router-dom';
import { SmallAvatar, Avatar } from '../../Common/Avatar';
import { BiSearch } from 'react-icons/bi';
import { SearchInput } from '../../Wedgets/WedgetsStyles';

const Message = () => {
  return (
    <Container>
      <Header>
        <NavLink to="/">
          <HiArrowNarrowLeft />
        </NavLink>
        <h2>Messages</h2>
      </Header>
      <Body>
        <Conversation>
          <SearchInput>
            <div>
              <BiSearch />
            </div>
            <input type="text" placeholder="Search..." />
          </SearchInput>
          <ConversationItem>
            <SmallAvatar>
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GiLq0My7HOMCnz3WuZcrAytshhGdGjBDBp2eHWB_A=s96-c"
                alt=""
              />
            </SmallAvatar>
            <PreviewConversation>
              <div>
                <UserName>Felix Nguyen</UserName>
                <TimeLastMessage>4h</TimeLastMessage>
              </div>
              <LastMessage>How are you today?</LastMessage>
            </PreviewConversation>
          </ConversationItem>
          <ConversationItem>
            <SmallAvatar>
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GiLq0My7HOMCnz3WuZcrAytshhGdGjBDBp2eHWB_A=s96-c"
                alt=""
              />
            </SmallAvatar>
            <PreviewConversation>
              <div>
                <UserName>Felix Nguyen</UserName>
                <TimeLastMessage>4h</TimeLastMessage>
              </div>
              <LastMessage>How are you today?</LastMessage>
            </PreviewConversation>
          </ConversationItem>
          <ConversationItem>
            <SmallAvatar>
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GiLq0My7HOMCnz3WuZcrAytshhGdGjBDBp2eHWB_A=s96-c"
                alt=""
              />
            </SmallAvatar>
            <PreviewConversation>
              <div>
                <UserName>Felix Nguyen</UserName>
                <TimeLastMessage>4h</TimeLastMessage>
              </div>
              <LastMessage>How are you today?</LastMessage>
            </PreviewConversation>
          </ConversationItem>
        </Conversation>
        <Chat>
          <ChatHeader>
            <Avatar>
              <img
                src="https://lh3.googleusercontent.com/a-/AOh14GiLq0My7HOMCnz3WuZcrAytshhGdGjBDBp2eHWB_A=s96-c"
                alt=""
              />
            </Avatar>
            <Info>
              <UserName>John Smith</UserName>
              <span>@John Smith</span>
            </Info>
          </ChatHeader>
          <ChatView>
            <Messages>
              <MessageItem>
                <SmallAvatar>
                  <img
                    src="https://lh3.googleusercontent.com/a-/AOh14GiLq0My7HOMCnz3WuZcrAytshhGdGjBDBp2eHWB_A=s96-c"
                    alt=""
                  />
                </SmallAvatar>
                <MessageContent>
                  <p>Do you go to school with anyone or go to school alone?</p>
                </MessageContent>
              </MessageItem>
              <MessageItem me={1}>
                <SmallAvatar>
                  <img
                    src="https://lh3.googleusercontent.com/a-/AOh14GiLq0My7HOMCnz3WuZcrAytshhGdGjBDBp2eHWB_A=s96-c"
                    alt=""
                  />
                </SmallAvatar>
                <MessageContent>
                  <p>Go with my friends</p>
                </MessageContent>
              </MessageItem>
            </Messages>
          </ChatView>
        </Chat>
      </Body>
    </Container>
  );
};

export default Message;
