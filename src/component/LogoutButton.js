import React, { useContext } from 'react';
import { WebSocketContext } from '../redux/WebSocket';
import { Button } from 'react-bootstrap';

export default function LogoutButton({ text }) {
    const ws = useContext(WebSocketContext);
    const sendLogout = () => {
        ws.sendLogout();
    };
    return <Button onClick={sendLogout}>{text}</Button>;
}
