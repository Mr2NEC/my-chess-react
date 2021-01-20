import React from 'react';
import { socket } from '../socketIO';
import { ListGroup } from 'react-bootstrap';

import ChatItem from './ChatItem';
import ChatInput from './ChatInput';
import './scrollbar.css';

const ListGroupStyle = {
    height: '400px',
};
export default function ChatList({ messages }) {
    socket.emit('connection');
    return (
        <>
            <div className="d-flex flex-column w-90 mx-2">
                <ChatInput />
                <ListGroup
                    className="ChatList scrollbar scrollbar-primary w-100"
                    style={ListGroupStyle}
                >
                    {messages.map(function (message) {
                        return (
                            <ChatItem key={message.messageId} {...message} />
                        );
                    })}
                </ListGroup>
            </div>
        </>
    );
}
