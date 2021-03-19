import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ERRORHIDE } from '../redux/type'
import ModalWindow from './ModalWindow';

export default function ErrorModal () {
    const dispatch = useDispatch();
    const newError = useSelector((state) => state.errorReducer);

    const sendErrorHide = () => {
    dispatch( { type: ERRORHIDE } );
    }

    const { message, show } = newError;

    const props = {
        message,
        show,
        fu: sendErrorHide,
    };

    return <ModalWindow {...props} />;
}
