import React from 'react';
import { ListGroup, DropdownButton } from 'react-bootstrap';
import UserItem from './UserItem';
import './UserList.css';
import './scrollbar.css';

export default function UserList({ users }) {
    const direction = 'up';
    return (
        <div className="mx-5 center-block align-self-end">
            <DropdownButton
                key={direction}
                id={`dropdown-button-drop-${direction}`}
                drop={direction}
                variant="secondary"
                title={'Online players'}
            >
                <ListGroup className="UserList scrollbar scrollbar-primary  my-2 mx-auto">
                    {users.map(function (user) {
                        return <UserItem key={user.id} {...user} />;
                    })}
                </ListGroup>
            </DropdownButton>
        </div>
    );
}
