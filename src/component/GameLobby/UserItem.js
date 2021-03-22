import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';

export default function UserItem(props) {
    const { connectionId, login, fu } = props;
    return (
        <ListGroup.Item className='w-100 d-flex justify-content-between align-items-center mx-auto'>
            <span className='mx-auto'>{login}</span>
            <Button variant='success' onClick={() => fu(connectionId)}>
                Play
            </Button>
        </ListGroup.Item>
    );
}
