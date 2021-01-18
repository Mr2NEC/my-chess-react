import React, { useRef, useState } from 'react';
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
    const target = useRef(null);
    return (
        <InputGroup className="mb-2">
            <FormControl
                as="textarea"
                placeholder="Please enter your message."
                rows={3}
            />
            <InputGroup.Append>
                {auth.token !== undefined &&
                auth.token === localStorage.token ? (
                    <Button ref={target} onClick={() => console.log('ok')}>
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
