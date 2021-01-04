import React from 'react';
import { Link } from 'react-router-dom';

export default function () {
    return (
        <>
            <h1>MainPage</h1>
            <Link to={`/BoardPage`}>BoardPage</Link>
        </>
    );
}
