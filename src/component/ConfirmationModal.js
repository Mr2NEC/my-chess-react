
import React, {useState} from 'react';
import { Button,Modal } from 'react-bootstrap';

export default function ConfirmationModal({id, login}) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="success" onClick={handleShow}>
            Play
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>The {login} invites you to join the game.</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to join the game?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={()=>{ console.log(id);handleClose()}}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }