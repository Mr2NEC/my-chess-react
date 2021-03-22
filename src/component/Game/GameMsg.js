import React from 'react';
import { Card } from 'react-bootstrap';
import convertTimestamp from './convertTimestamp';

export default function GameMsg(props) {
    const { msgStyle, login, text, timestamp } = props;
    return (
        <div className={`d-flex p-1 ${msgStyle}`}>
            <Card className='w-75'>
                <Card.Header className='p-1 d-flex justify-content-between'>
                    <span className='px-1'>{login}</span>
                    <span className='px-1 text-muted timeSize'>
                        {convertTimestamp(timestamp)}
                    </span>
                </Card.Header>
                <Card.Body>
                    <Card.Text>{text}</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}
