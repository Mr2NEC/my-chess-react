import React, { useRef, useState } from 'react';
import { socket } from '../useChat';
import { useSelector } from 'react-redux';
import {
    FormControl,
    Button,
    Overlay,
    Tooltip,
    InputGroup,
} from 'react-bootstrap';

export default function ChatInput() {
    const auth = useSelector((state) => state.authReducer);
    const [show, setShow] = useState(false);
    const [text, setText] = useState('');
    const target = useRef(null);
    return (
        <InputGroup className="mb-2">
            <FormControl
                as="textarea"
                placeholder="Please enter your message."
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value.trim())}
            />
            <InputGroup.Append>
                {auth.token !== undefined &&
                auth.token === localStorage.token ? (
                    <Button
                        ref={target}
                        onClick={() =>
                          {socket.emit('sendMSG', {
                                chatID: 1,
                                login: auth.payload.sub.login,
                                message: text,
                            })
                            socket.on('sendMSG',(data) => {if(data ==='ok'){setText('')}})}
                        }
                    >
                        Send
                    </Button>
                ) : (
                    <>
                        <Button ref={target} onClick={() => setShow(!show)}>
                            Send
                        </Button>
                        <Overlay
                            target={target.current}
                            show={show}
                            placement="right"
                        >
                            {(props) => (
                                <Tooltip id="overlay-example" {...props}>
                                    Log in to send a message.
                                </Tooltip>
                            )}
                        </Overlay>
                    </>
                )}
            </InputGroup.Append>
        </InputGroup>
    );
}
