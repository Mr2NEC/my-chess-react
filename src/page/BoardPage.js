import React from 'react';
import СhessDesk from '../component/chessDesk';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <>
            <h1>BoardPage</h1>
            <СhessDesk />
            <Link to={`/`}>MainPage</Link>
        </>
    );
}
