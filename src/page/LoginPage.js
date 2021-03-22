import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

import { WebSocketContext } from '../redux/WebSocket';
import AuthComponent from '../component/GameLobby/AuthForm';

export default function LoginPage() {
    const ws = useContext(WebSocketContext);

    const props = {
        text: 'Sign in',
        fu: (login, password) => {
            ws.sendLogin({
                login,
                password,
            });
        },
    };

    return (
        <>
            <h1>LoginPage</h1>
            <AuthComponent {...props} />

            <div className='d-flex flex-column'>
                <div className='d-flex justify-content-center align-items-stretch p-2'>
                    <span className='align-self-center'>
                        Have no account yet?
                    </span>
                    <Nav.Link
                        className='text-info p-1'
                        as={NavLink}
                        to='/register'>
                        Sign up
                    </Nav.Link>
                </div>
            </div>
        </>
    );
}
