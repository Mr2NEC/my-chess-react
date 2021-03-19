import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap';

import {ENDGAME, ALERT} from '../redux/type'

export default function AlertModal() {
    const dispatch = useDispatch();
    const gameDb = useSelector((state) => state.gameDbReducer);
    const game = useSelector((state) => state.gameReducer);

    const sendGameAlert = () => {
        dispatch( { type: ALERT, payload: { alert: false } } );
        
        if ( game.checkMate ) {
            dispatch({ type: ENDGAME });
        }
    };

    return (
        <Modal size="sm" show={gameDb.alert} onHide={() => sendGameAlert()}>
            <Modal.Header closeButton>
                <Modal.Body className="text-center">
                    {game.check && !game.checkMate
                        ? ` ${game.turn === 'black' ? 'Black' : 'White'} Check!`
                        : `Check and mate. ${
                              game.turn === 'black' ? 'White' : 'Black'
                          } won`}
                </Modal.Body>
            </Modal.Header>
        </Modal>
    );
}
