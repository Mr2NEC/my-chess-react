import React from 'react';
import Board from '../component/Board';
import GameChat from '../component/GameChat';
import AlertModal from '../component/AlertModal';
import './GamePage.css';

export default function GamePage() {
    return (
        <>
            <h1>Game Page</h1>
            <div className="d-flex flex-lg-row flex-column">
                <AlertModal />
                <Board />
                <GameChat />
            </div>
        </>
    );
}
