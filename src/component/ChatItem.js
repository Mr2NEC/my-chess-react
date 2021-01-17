import React from 'react';
import { ListGroup } from 'react-bootstrap';
import convertTimestamp from "./convertTimestamp";

export default function ChatItem({messageId, id, login, message,timestamp}) {

    return (
            <ListGroup.Item id={messageId}>
            <span>{login}</span>
            <span>{message}</span>
            <span>{convertTimestamp(timestamp)}</span>
            </ListGroup.Item>
    );
}
