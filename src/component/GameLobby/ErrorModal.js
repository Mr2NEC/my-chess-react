import React from 'react';
import { Modal } from 'react-bootstrap';

export default function ErrorModal(props) {
    const { show, fu, message } = props;

    return (
        <Modal size='sm' show={show} onHide={() => fu()}>
            <Modal.Header closeButton>
                <Modal.Body className='text-center'>{message}</Modal.Body>
            </Modal.Header>
        </Modal>
    );
}
