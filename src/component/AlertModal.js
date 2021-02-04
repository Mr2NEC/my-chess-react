import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { WebSocketContext } from '../redux/WebSocket';
import { Modal } from 'react-bootstrap';

export default function AlertModal() {
    const ws = useContext(WebSocketContext);

    const gameDb = useSelector((state) => state.gameDbReducer);
    const game = useSelector((state) => state.gameReducer);

    const sendGameAlert = () => {
        if (game.checkMate) {
            ws.sendGameAlert();
            ws.sendEndGame();
        }
        ws.sendGameAlert();
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
