import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ConfirmationModal from "./ConfirmationModal";

export default function UserItem({id,login}){
    return <ListGroup.Item><span>{login}</span><ConfirmationModal id= {id} login={login}/></ListGroup.Item>

}