import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionLogin } from '../redux/actions';
import { Button, Form } from 'react-bootstrap';
import './LoginPage.css';

function LoginPage({ onLogin }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return login.length > 0 && password.length > 0;
    }

    return (
        <div className="Login">
            <Form>
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
                    onClick={() => onLogin(login, password)}
                >
                    Login
                </Button>
            </Form>
        </div>
    );
}

export const CLoginPage = connect(null, { onLogin: actionLogin })(LoginPage);
