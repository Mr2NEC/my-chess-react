import React, { useState, useContext } from 'react';
import { WebSocketContext } from '../redux/WebSocket';
import { NavLink } from 'react-router-dom';
import { Nav, Button, Form } from 'react-bootstrap';
import { LOGIN } from '../redux/type';

import './AuthForm.css';

export default function LoginPage() {
    const ws = useContext(WebSocketContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const loginMessage = () => {
        ws.sendMessage(LOGIN, {
            login: login,
            password: password,
        });
    };

    function validateForm() {
        return login.length > 0 && password.length > 0;
    }
    return (
        <>
            <h1>LoginPage</h1>
            <div className="AuthForm">
                <Form>
                    <Form.Group size="lg">
                        <Form.Label>Login</Form.Label>
                        <Form.Control
                            autoFocus
                            type="login"
                            value={login}
                            onChange={(e) => setLogin(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group size="lg">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button
                        block
                        size="lg"
                        disabled={!validateForm()}
                        onClick={loginMessage}
                    >
                        Sign in
                    </Button>
                </Form>
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex justify-content-center align-items-stretch p-2">
                    <span className="align-self-center">
                        Have no account yet?
                    </span>
                    <Nav.Link
                        className="text-info p-1"
                        as={NavLink}
                        to="/register"
                    >
                        Sign up
                    </Nav.Link>
                </div>
            </div>
        </>
    );
}
