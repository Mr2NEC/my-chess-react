import React from 'react';
import HeaderX from './headerX';
import HeaderY from './headerY';
import GameField from './gameField';
import './chessDesk.css';

const xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const yCoords = ['8', '7', '6', '5', '4', '3', '2', '1'];

export default (props) => {
    return (
        <div className="chess-desk">
            <HeaderX position="top" headers={xCoords} />
            <HeaderX position="bottom" headers={xCoords} />
            <HeaderY position="left" headers={yCoords} />
            <HeaderY position="right" headers={yCoords} />
            <div className="chess-desk__game-field">
                <GameField xCoords={xCoords} yCoords={yCoords} />
            </div>
        </div>
    );
};
