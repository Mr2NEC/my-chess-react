import React from 'react';
import Board from '../component/Board'
import GameChat from '../component/GameChat'
import './GamePage.css';

export default function GamePage() {
    return (
        <>
            <h1>Game Page</h1>
            <div className='gamePage'>
            <Board />
            <GameChat />
            </div>
        </>
    );
}
