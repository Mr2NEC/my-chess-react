import React, {useState, useContext} from 'react';
import { useSelector } from 'react-redux';
import { InputGroup, FormControl, Button} from 'react-bootstrap';
import GameMsg from './GameMsg'
import { WebSocketContext } from '../redux/WebSocket';
import './Board.css';
import './scrollbar.css';

export default function GameChat (){
    const [text, setText] = useState('');
    const ws = useContext(WebSocketContext);
    const msgs = useSelector((state) => state.messageReducer);

    const sendMessage = () => {
        ws.sendMessage(text);
    };

    function validateMessage() {
        return text.length > 0;
    }
    return <div className='GameChat'>  
    <InputGroup className='p-1'>
        <FormControl
        placeholder="Enter your message"
        aria-label="Enter your message"
        aria-describedby="basic-addon2"
        value={text}
        onChange={(e) => setText(e.target.value)}
        />
        <InputGroup.Append>
            <Button variant="outline-secondary"
                disabled={!validateMessage()}
                onClick={sendMessage}
            >Send</Button>
        </InputGroup.Append>
    </InputGroup>
    <div className='scrollbar scrollbar-primary'>
            {msgs.map((msg)=>{
                return <GameMsg key={msg.id} {...msg}/>
            })}

        </div>
    </div>
}