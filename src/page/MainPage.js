import React, { useContext } from 'react';
import { useSelector } from 'react-redux';

import { WebSocketContext } from '../redux/WebSocket';
import UserList from '../component/GameLobby/UserList';
import ConfirmationModal from '../component/GameLobby/ConfirmationModal';

export default function MainPage() {
    const ws = useContext(WebSocketContext);
    const sendProposePlay = (id) => {
        ws.sendProposePlay(id);
    };
    const sendGame = (status) => {
        ws.sendGame({
            anotherSocketId: propose.anotherSocketId,
            status: status,
        });
    };

    const users = useSelector((state) => state.userOnlineReducer);
    const propose = useSelector((state) => state.proposeReducer);

    const usersProps = {
        users,
        fu: sendProposePlay,
    };
    const gameProps = {
        propose,
        fu: sendGame,
    };

    return (
        <>
            <h1>Главная</h1>
            <div className='d-flex bd-highlight my-5 justify-content-center'>
                <UserList {...usersProps} />
                <ConfirmationModal {...gameProps} />
            </div>
        </>
    );
}
