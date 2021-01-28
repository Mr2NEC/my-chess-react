
import React, {useState} from 'react';
import { Button,Modal } from 'react-bootstrap';

export default function ConfirmationModal({connectionId, login, status}) {
    const [show, setShow] = useState(false);
  
    const handleStatus = () => setShow(status);
  
    return (
      <>
        <Button variant="success" onClick={handleStatus}>
            Play
        </Button>
  
        <Modal show={show} onHide={handleStatus}>
          <Modal.Header closeButton>
            <Modal.Title>The {login} invites you to join the game.</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to join the game?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={console.log('no')}>
              No
            </Button>
            <Button variant="primary" onClick={()=>{console.log(connectionId)}}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }