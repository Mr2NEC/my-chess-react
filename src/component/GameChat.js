import React, {useState, useContext} from 'react';
import { useSelector } from 'react-redux';
import { InputGroup, FormControl, Button} from 'react-bootstrap';
import GameMsg from './GameMsg'
import { WebSocketContext } from '../redux/WebSocket';
import './Board.css';
import './scrollbar.css';

let msgs = [
    {id:1, userId: 1,login: 'Mr2nec', text:'fksafjsfhakjfkaj', timestamp: '10:10'},
    {id:2, userId: 2,login: 'fss', text:'fksafjsfhakjfkajfksafjsfhakjfkajfksafjsfhakjfkajfksafjsfhakjfkaj', timestamp: '10:11'},
    {id:3, userId: 3,login: '12323123', text:'fksafjsfhakjfkaj', timestamp: '10:11'},
    {id:4, userId: 3,login: '12323123', text:'fksafjsfhakjfkaj', timestamp: '10:11'},
    {id:5, userId: 3,login: '12323123', text:'fksafjsfhakjfkaj', timestamp: '10:11'},
    {id:6, userId: 3,login: '12323123', text:'fksafjsfhakjfkaj', timestamp: '10:11'},
]
export default function GameChat (){
    const [text, setText] = useState('');
    const ws = useContext(WebSocketContext);
    const auth = useSelector((state) => state.authReducer.payload);

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
                msg.userStyle= auth.sub.id === msg.userId?'justify-content-end':'justify-content-start';
                return <GameMsg key={msg.id} {...msg}/>
            })}

        </div>
    </div>
}