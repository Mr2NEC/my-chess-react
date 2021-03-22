import React, { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { WebSocketContext } from '../redux/WebSocket';
import { ENDGAME } from '../redux/type';
import Board from '../component/Game/Board/Board';
import GameChat from '../component/Game/GameChat';
import AlertModal from '../component/Game/AlertModal';

export default function GamePage() {
    const game = useSelector((state) => state.gameReducer);
    const gameDB = useSelector((state) => state.gameDbReducer);
    const msgs = useSelector((state) => state.messageReducer);
    const ws = useContext(WebSocketContext);

    const dispatch = useDispatch();

    const sendMessage = (text) => {
        ws.sendMessage(text);
    };

    const sendEndGame = () => {
        if (game.checkMate) {
            dispatch({ type: ENDGAME });
        }
    };

    const alertProps = {
        game,
        aletText:
            game.check && !game.checkMate
                ? `${game.turn === 'black' ? 'Black' : 'White'} Check!`
                : `Check and mate. ${
                      game.turn === 'black' ? 'White' : 'Black'
                  } won`,
        fu: sendEndGame,
    };

    const msgsProps = {
        msgs,
        fu: sendMessage,
    };

    const gameFieldRotate = {
        transform: 'rotate(180deg)',
    };

    return (
        <>
            <h1>Game Page</h1>
            <div className='d-flex flex-lg-row flex-column justify-content-center w-100'>
                <AlertModal {...alertProps} />
                <Board
                    rotate={gameDB.color === 'white' ? gameFieldRotate : null}
                />
                <GameChat {...msgsProps} />
            </div>
        </>
    );
}
