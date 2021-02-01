import React from 'react';
import { Card } from 'react-bootstrap';
import './Board.css';


export default function GameMsg ({userStyle, login, text, timestamp}){
    return (
        <div className={`d-flex p-1 ${userStyle}`}>
            <Card className='w-75'>
                <Card.Header className='p-1 d-flex justify-content-between'><span className='px-1'>{login}</span><span className='px-1 text-muted timeSize'>{timestamp}</span></Card.Header>
                <Card.Body>
                <Card.Text>
                    {text}
                </Card.Text>
                </Card.Body>
            </Card>
        </div>)
}