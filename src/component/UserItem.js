import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

export default function UserItem(props) {
    const {connectionId, login, onClick}= props
    return (
        <ListGroup.Item>
            <span>{login}</span>
            <Button  variant="success" onClick={()=>onClick(connectionId)}>
            Play
            </Button>
        </ListGroup.Item>
    );
}
