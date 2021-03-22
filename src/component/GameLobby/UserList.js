import React from 'react';
import { ListGroup } from 'react-bootstrap';
import UserItem from './UserItem';

import '../scrollbar.css';

export default function UserList(props) {
    const userList = {
        minWidth: '620px',
        maxHeight: '50vh',
    };

    const { users, fu } = props;
    return (
        <div className='mx-2 center-block align-self-end bd-highlight'>
            <ListGroup
                style={userList}
                className='scrollbar scrollbar-primary w-100 my-2 mx-auto'>
                {users.map((user) => {
                    const props = {
                        connectionId: user.connectionId,
                        login: user.login,
                        fu,
                    };
                    return <UserItem key={user.id} {...props} />;
                })}
            </ListGroup>
        </div>
    );
}
