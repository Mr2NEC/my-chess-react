import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { WebSocketContext } from '../redux/WebSocket';
import UserItem from './UserItem';
import './UserList.css';
import './scrollbar.css';

export default function UserList() {
    const ws = useContext(WebSocketContext);
    const sendProposePlay = (id) => {
        ws.sendProposePlay(id);
    };
    let users = useSelector((state) => state.userOnlineReducer)
    return (
        <div className="mx-2 center-block align-self-end">
                <ListGroup className="UserList scrollbar scrollbar-primary  my-2 mx-auto">
                    {users.map((user)=> {
                    const props = {
                        connectionId: user.connectionId,
                        login: user.login,
                        onClick:sendProposePlay
                    }
                    return <UserItem key={user.id} {...props}/>
                    })
                    }
                </ListGroup>
        </div>
    );
}
