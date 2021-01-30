
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../redux/WebSocket';
import { Button,Modal } from 'react-bootstrap';

export default function ConfirmationModal() {
    const propose = useSelector((state) => state.proposeReducer)

    const ws = useContext(WebSocketContext);
    const sendGame = (status) => {
      ws.sendGame({anotherSocketId: propose.anotherSocketId, status: status});
  };
  
    return (
      <>  
        <Modal show={propose.show} onHide={()=>sendGame(false)}>
          <Modal.Header closeButton>
            <Modal.Title>The {propose.anotherLogin} invites you to join the game.</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to join the game?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={()=>{
              return sendGame(false);
              }}>
              No
            </Button>
            <Button variant="primary" onClick={()=>{
              return sendGame(true);
              }}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }