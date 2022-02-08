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
import ChatInput from '../../ChatInput';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import db from '../../../firebase';
import { useEffect, useState } from 'react';
import formatCreatedAt from '../../../Utils/formatCreatedAt';
import { selectUser } from '../../../features/user/userSlice';
import { useSelector } from 'react-redux';

const Message = () => {
  const user = useSelector(selectUser);
  const [rooms, setRooms] = useState([]);
  const [messages, setMessages] = useState([]);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    let isSubscribed = true;

    const fetchRooms = async () => {
      const rooms = [];

      try {
        const roomsRef = collection(db, 'rooms');
        const queryRooms = query(roomsRef, orderBy('lastChatTime', 'desc'));
        const res = await getDocs(queryRooms);

        res.forEach((doc) => {
          rooms.push({ id: doc.id, ...doc.data() });
        });
      } catch (e) {
        console.log('Error', e.message);
      }

      if (isSubscribed) {
        setRooms(rooms);
      }
    };

    fetchRooms();

    return () => {
      isSubscribed = false;
    };
  }, []);

  const handleChooseRoom = async (roomId, userName, avatar, userIdRv) => {
    try {
      const messRef = collection(db, 'messages');
      const queryMess = query(messRef, where('roomId', '==', roomId));
      const res = await getDocs(queryMess);

      const mess = [];
      res.forEach((doc) => {
        mess.push({ id: doc.id, ...doc.data() });
      });
      setMessages(mess);
      setCurrentUser({ userName, avatar, userIdRv });
    } catch (e) {
      console.log('Error', e.message);
    }
  };

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
          {rooms.map((room) => {
            return (
              <ConversationItem
                key={room.id}
                onClick={() =>
                  handleChooseRoom(
                    room.id,
                    room.userNameRv,
                    room.avatarRv,
                    room.userIdRv,
                  )
                }
              >
                <SmallAvatar>
                  <img src={room.avatarRv} alt="" />
                </SmallAvatar>
                <PreviewConversation>
                  <div>
                    <UserName>{room.userNameRv}</UserName>
                    <TimeLastMessage>
                      {formatCreatedAt(room.lastChatTime)}
                    </TimeLastMessage>
                  </div>
                  <LastMessage>{room.lastMessage}</LastMessage>
                </PreviewConversation>
              </ConversationItem>
            );
          })}
        </Conversation>
        <Chat>
          {currentUser ? (
            <>
              <ChatHeader>
                <Avatar>
                  <img src={currentUser.avatar} alt="" />
                </Avatar>
                <Info>
                  <UserName>{currentUser.userName}</UserName>
                  <span>@{currentUser.userName}</span>
                </Info>
              </ChatHeader>
              <ChatView>
                <Messages>
                  {messages.map((mess) => {
                    return (
                      <MessageItem
                        key={mess.id}
                        me={currentUser.userIdRv === mess.userId ? 1 : 0}
                      >
                        <SmallAvatar>
                          <img src={mess.avatar} alt="" />
                        </SmallAvatar>
                        <MessageContent>
                          <p>{mess.content}</p>
                        </MessageContent>
                      </MessageItem>
                    );
                  })}
                </Messages>
                <ChatInput />
              </ChatView>
            </>
          ) : (
            'Not'
          )}
        </Chat>
      </Body>
    </Container>
  );
};

export default Message;
