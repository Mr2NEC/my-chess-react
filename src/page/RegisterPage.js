import React, { useContext } from 'react';
import { WebSocketContext } from '../redux/WebSocket';
import AuthComponent from '../component/GameLobby/AuthForm';

export default function RegisterPage() {
    const ws = useContext(WebSocketContext);

    const props = {
        text: 'Sign up',
        fu: (login, password) => {
            ws.sendRegister({
                login,
                password,
            });
        },
    };

    return (
        <>
            <h1>RegisterPage</h1>
            <AuthComponent {...props} />
        </>
    );
}
