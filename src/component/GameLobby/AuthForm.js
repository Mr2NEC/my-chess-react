import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

export default function AuthComponent(props) {
    const { text, fu } = props;
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const FROMSTULE = {
        margin: '0 auto',
        padding: '50px',
        maxWidth: '460px',
        background: '#fff',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,0.1)',
        borderRadius: '4px',
    };

    function validateForm() {
        return login.length > 0 && password.length > 0;
    }
    return (
        <Form style={FROMSTULE}>
            <Form.Group size='lg'>
                <Form.Label>Login</Form.Label>
                <Form.Control
                    autoFocus
                    type='login'
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
            </Form.Group>
            <Form.Group size='lg'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button
                block
                size='lg'
                disabled={!validateForm()}
                onClick={() => {
                    fu(login, password);
                    setPassword('');
                }}
                className='my-2'>
                {text}
            </Button>
        </Form>
    );
}
