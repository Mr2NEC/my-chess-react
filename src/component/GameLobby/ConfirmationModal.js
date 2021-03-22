import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export default function ConfirmationModal(props) {
    const { propose, fu } = props;
    return (
        <Modal show={propose.show} onHide={() => fu(false)}>
            <Modal.Header closeButton>
                <Modal.Title>
                    The {propose.anotherLogin} invites you to join the game.
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>Do you want to join the game?</Modal.Body>
            <Modal.Footer>
                <Button
                    variant='secondary'
                    onClick={() => {
                        return fu(false);
                    }}>
                    No
                </Button>
                <Button
                    variant='primary'
                    onClick={() => {
                        return fu(true);
                    }}>
                    Yes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
