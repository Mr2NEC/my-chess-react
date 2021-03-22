import React from 'react';
import ColumnsX from '../columnsX';
import RowsY from '../rowsY';
import Field from '../Field/Field';
import './Board.css';

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
const ROWS = ['1', '2', '3', '4', '5', '6', '7', '8'];

export default function Board({ rotate }) {
    return (
        <div className='chess-desk mx-auto'>
            <ColumnsX position='top' headers={COLUMNS} />
            <ColumnsX position='bottom' headers={COLUMNS} />
            <RowsY position='left' headers={ROWS} />
            <RowsY position='right' headers={ROWS} />
            <div style={rotate} className='chess-desk__game-field'>
                <Field COLUMNS={COLUMNS} ROWS={ROWS} rotate={rotate} />
            </div>
        </div>
    );
}
