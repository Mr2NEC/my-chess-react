import React from 'react';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';


export default function GameMsg ({userId, login, text, timestamp}){
    const auth = useSelector((state) => state.authReducer.payload);
    const msgStyle = auth.sub.id === userId?'justify-content-end':'justify-content-start'
    return (
        <div className={`d-flex p-1 ${msgStyle}`}>
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