import React, { useState } from 'react';

import { Button, Form } from 'react-bootstrap';
import './LoginPage.css';

export default function Login() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return login.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="login">
                    <Form.Label>Login</Form.Label>
                    <Form.Control
                        autoFocus
                        type="login"
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button
                    variant="success"
                    block
                    size="lg"
                    type="submit"
                    disabled={!validateForm()}
                >
                    Login
                </Button>
            </Form>
        </div>
    );
}
