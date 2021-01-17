import React from 'react';
import { ListGroup } from 'react-bootstrap';
import UserItem from "./UserItem";
import  "./UserList.css";
import "./scrollbar.css";


export default function UserList({users}){

return <ListGroup className='UserList scrollbar scrollbar-primary  mt-5 mx-auto' >
        {users.map(function(user) {
            return <UserItem key={user.id} {...user} />;
            })}
        </ListGroup>
}
