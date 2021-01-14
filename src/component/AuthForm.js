import React, { useState } from 'react';
import { connect } from 'react-redux';
import actionLogin from '../redux/action/actionLogin';
import actionRegister from '../redux/action/actionRegister';
import { Button, Form } from 'react-bootstrap';
import './AuthForm.css';

function AuthForm({ onLogin, textBtn = 'Submit' }) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function validateForm() {
        return login.length > 0 && password.length > 0;
    }
    return (
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
                    onClick={() => onLogin(login, password)}
                >
                    {textBtn}
                </Button>
            </Form>
        </div>
    );
}

export const CLogin = connect(null, { onLogin: actionLogin })(AuthForm);
export const CRegister = connect(null, { onLogin: actionRegister })(AuthForm);
