import React, { useState } from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

export default function GameChatControl({ fu }) {
    const [text, setText] = useState('');

    function validateMessage() {
        return text.length > 0;
    }
    return (
        <InputGroup className='p-1'>
            <FormControl
                placeholder='Enter your message'
                aria-label='Enter your message'
                aria-describedby='basic-addon2'
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <InputGroup.Append>
                <Button
                    variant='outline-secondary'
                    disabled={!validateMessage()}
                    onClick={() => {
                        fu(text);
                        setText('');
                    }}>
                    Send
                </Button>
            </InputGroup.Append>
        </InputGroup>
    );
}
