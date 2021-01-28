import React, { useContext } from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { WebSocketContext } from '../redux/WebSocket';

export default function UserItem({ connectionId, login }) {
    const ws = useContext(WebSocketContext);
    const sendProposePlay = () => {
        ws.sendProposePlay(connectionId);
    };
    return (
        <ListGroup.Item>
            <span>{login}</span>
            <Button variant="success" onClick={sendProposePlay}>
            Play
            </Button>
        </ListGroup.Item>
    );
}
