import React from 'react';
import { ListGroup } from 'react-bootstrap';
import UserItem from './UserItem';
import './UserList.css';
import './scrollbar.css';

export default function UserList({ users }) {
    return (
        <div className="mx-2 center-block align-self-end">
                <ListGroup className="UserList scrollbar scrollbar-primary  my-2 mx-auto">
                    {users.map(function (user) {
                        return <UserItem key={user.id} {...user} />;
                    })}
                </ListGroup>
        </div>
    );
}
