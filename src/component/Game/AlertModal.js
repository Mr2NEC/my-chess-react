import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function AlertModal(props) {
    const { game, aletText, fu } = props;
    const [alert, setAlert] = useState(game.check);
    return (
        <Modal
            size='sm'
            show={alert}
            onHide={() => {
                setAlert(false);
                fu();
            }}>
            <Modal.Header closeButton>
                <Modal.Body className='text-center'>{aletText}</Modal.Body>
            </Modal.Header>
        </Modal>
    );
}
