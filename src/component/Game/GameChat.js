import React from 'react';
import { useSelector } from 'react-redux';
import GameChatControl from './GameChatControl';
import GameMsg from './GameMsg';
import '../scrollbar.css';

export default function GameChat(props) {
    const auth = useSelector((state) => state.authReducer.payload);

    const { msgs, fu } = props;

    const messagesDiv = {
        width: '500px',
        height: '500px',
    };
    const messagesBody = {
        height: '450px',
    };
    return (
        <div style={messagesDiv} className='mx-auto border'>
            <GameChatControl fu={fu} />
            <div className='scrollbar scrollbar-primary' style={messagesBody}>
                {msgs.map((msg) => {
                    const props = {
                        ...msg,
                        msgStyle:
                            auth.sub.id === msg.userId
                                ? 'justify-content-end'
                                : 'justify-content-start',
                    };
                    return <GameMsg key={msg.id} {...props} />;
                })}
            </div>
        </div>
    );
}
