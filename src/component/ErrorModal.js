import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../redux/WebSocket';

import ModalWindow from './ModalWindow';

export default function ErrorModal() {
    const ws = useContext(WebSocketContext);

    const sendErrorHide = () => {
        ws.sendErrorHide();
    };

    const newError = useSelector((state) => state.errorReducer);

    const { message, show } = newError;

    const props = {
        message,
        show,
        fu: sendErrorHide,
    };

    return <ModalWindow {...props} />;
}
