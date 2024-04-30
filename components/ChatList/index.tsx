import { IDM } from '@typings/db';
import { ChatZone, Section } from './styles';
import React, { VFC, useCallback, useRef } from 'react';
import Chat from '@components/Chat';
import { Scrollbars } from 'react-custom-scrollbars';

interface Props {
  chatData?: IDM[];
}

const ChatList: VFC<Props> = ({ chatData }) => {
  const scrollbarRef = useRef(null);
  const onscroll = useCallback(() => {
    console.log('scroll');
  }, []);

  return (
    <ChatZone>
      <Scrollbars autoHide ref={scrollbarRef} onScrollFrame={onscroll}>
        {chatData?.map((chat) => (
          <Chat key={chat.id} data={chat} />
        ))}
      </Scrollbars>
    </ChatZone>
  );
};

export default ChatList;
