
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../redux/WebSocket';
import { Button,Modal } from 'react-bootstrap';

export default function ConfirmationModal() {
    const propose = useSelector((state) => state.gameReducer.propose)

    const ws = useContext(WebSocketContext);
    const sendCreateGame = (status) => {
      ws.sendCreateGame({connectionId:propose.connectionId,status:status});
  };
  
    return (
      <>  
        <Modal show={propose.status} onHide={()=>sendCreateGame(false)}>
          <Modal.Header closeButton>
            <Modal.Title>The {propose.login} invites you to join the game.</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to join the game?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>{
              return sendCreateGame(false);
              }}>
              No
            </Button>
            <Button variant="primary" onClick={()=>{
              return sendCreateGame(true);
              }}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }