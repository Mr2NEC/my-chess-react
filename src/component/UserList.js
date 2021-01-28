import React from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import UserItem from './UserItem';
import './UserList.css';
import './scrollbar.css';

export default function UserList() {
    let users = useSelector((state) => state.userOnlineReducer)

    return (
        <div className="mx-2 center-block align-self-end">
                <ListGroup className="UserList scrollbar scrollbar-primary  my-2 mx-auto">
                    {users.map((user)=> <UserItem key={user.id} {...user} />)}
                </ListGroup>
        </div>
    );
}
