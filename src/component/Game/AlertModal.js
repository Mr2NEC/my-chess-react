import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';

export default function AlertModal(props) {
    const { check, aletText, fu } = props;
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (check) {
            setShow(true);
        }
    }, [check]);

    return (
        <Modal
            size='sm'
            show={show}
            onHide={() => {
                setShow(false);
                fu();
            }}>
            <Modal.Header closeButton>
                <Modal.Body className='text-center'>{aletText}</Modal.Body>
            </Modal.Header>
        </Modal>
    );
}
