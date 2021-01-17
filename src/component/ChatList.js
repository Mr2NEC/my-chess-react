import React from 'react';
import { socket } from '../useChat';
import { ListGroup } from 'react-bootstrap';

import ChatItem from './ChatItem';
import ChatInput from './ChatInput';
import "./scrollbar.css";
import "./ChatList.css";

export default function ChatList({messages}) {
    socket();
    return (
        <>
        <ChatInput />
        <ListGroup className='ChatList scrollbar scrollbar-primary  mt-5 mx-auto'>
            {/* <div className='inner'> */}
        {messages.map(function(message) {
            return <ChatItem key={message.messageId} {...message} />;
            })}
            {/* </div> */}
        </ListGroup>
        </>
    );
}
