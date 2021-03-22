import React, { useState, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { WebSocketContext } from '../../../redux/WebSocket';
import Cell from '../Cell';
import { ERROR } from '../../../redux/type';
import './Field.css';

export default function Field(data) {
    const { COLUMNS, ROWS, rotate } = data;
    const dispatch = useDispatch();
    const ws = useContext(WebSocketContext);
    const game = useSelector((state) => state.gameReducer);
    const gameDb = useSelector((state) => state.gameDbReducer);
    const movementControl = useSelector(
        (state) => state.movementControlReducer,
    );
    const [selectedCells, setSelectedCells] = useState();

    function getPositions(position) {
        const gameMoves = game.moves;
        let moves = [];

        if (gameMoves) {
            for (let move in gameMoves) {
                if (move === position) {
                    moves = gameMoves[move];
                }
            }
            return moves;
        }
    }

    function cellClick(position) {
        if (gameDb.color === game.turn) {
            if (!movementControl.from) {
                const allowablePositions = getPositions(position);
                if (allowablePositions.length === 0) {
                    return dispatch({
                        type: ERROR,
                        payload: 'This piece cannot make a move.',
                    });
                }
                dispatch({ type: 'FROM', cell: position });
                return setSelectedCells(allowablePositions);
            }

            const allowablePositions = getPositions(movementControl.from);
            const findPosition = allowablePositions.find(
                (fp) => fp === position,
            );

            if (!findPosition) {
                return dispatch({
                    type: ERROR,
                    payload: 'This piece cannot move to the indicated cell.',
                });
            }
            setSelectedCells([]);
            return ws.sendMove({ from: movementControl.from, to: position });
        }
        return dispatch({ type: ERROR, payload: 'Now is not your turn.' });
    }

    function getPiece(cell) {
        let piece = '';

        for (let i in game.pieces) {
            if (cell === i) {
                piece = game.pieces[i];
            }
        }
        return piece;
    }

    function buildField() {
        const sideSize = COLUMNS.length;
        return ROWS.map((numRow) => {
            return (
                <div key={`row-${numRow}`} className='game-field__row'>
                    {buildRow(numRow, sideSize)}
                </div>
            );
        });
    }

    function buildRow(numRow, sideSize) {
        return COLUMNS.map((letter, i) => {
            const cellId = `${letter}${numRow}`;
            const piece = getPiece(cellId);
            const coords = { x: i + 1, xLetter: letter, y: numRow };
            const onClick = () => {
                cellClick(cellId);
            };
            const props = {
                cellId,
                coords,
                onClick,
                selectedCells,
                piece,
                rotate,
            };
            return <Cell key={cellId} {...props} />;
        });
    }
    return <div className='game-field'>{buildField()}</div>;
}
