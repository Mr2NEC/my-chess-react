import React, { useRef, useState } from 'react';
import { socket } from '../useChat';
import { useSelector } from 'react-redux';
import { Button, Overlay, Tooltip, Card } from 'react-bootstrap';

export default function Chat() {
    const auth = useSelector((state) => state.authReducer);
    const [show, setShow] = useState(false);
    const target = useRef(null);
    socket();
    return (
        <>
            <Card style={{ width: '50rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            {auth.token !== undefined && auth.token === localStorage.token ? (
                <>
                    <Button ref={target} onClick={() => console.log('ok')}>
                        Send
                    </Button>
                </>
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
        </>
    );
}
