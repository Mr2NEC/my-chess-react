import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../redux/WebSocket';
import { Alert,Modal } from 'react-bootstrap';

export default function ErrorModal() {
    const ws = useContext(WebSocketContext);

    const sendErrorHide = () => {
        ws.sendErrorHide();
    };

    const newError = useSelector((state)=> state.errorReducer);

    const {message,show} = newError
      return (
        <Modal size="sm" show={show} onHide={()=>sendErrorHide()}>
        <Modal.Header closeButton>
        <Modal.Body className='text-center'>{message}</Modal.Body>
        </Modal.Header>
      </Modal>
      );
    }