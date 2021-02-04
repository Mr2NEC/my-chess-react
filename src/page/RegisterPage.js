import React, { useState, useContext } from 'react';
import { WebSocketContext } from '../redux/WebSocket';
import { Button, Form } from 'react-bootstrap';

import './AuthForm.css';

export default function RegisterPage() {
    const ws = useContext(WebSocketContext);
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const sendRegister = () => {
        ws.sendRegister({
            login: login,
            password: password,
        });
        setPassword('')
    };

    function validateForm() {
        return login.length > 0 && password.length > 0;
    }
    return (
        <>
            <h1>RegisterPage</h1>
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
                        onClick={sendRegister}
                    >
                        Sign up
                    </Button>
                </Form>
            </div>
        </>
    );
}
