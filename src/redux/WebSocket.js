import React, { createContext } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import * as action from './action/action';
import * as types from './type';

const SOCKET_SERVER_URL = 'http://localhost:4000';
const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
    let socket;
    let ws;

    const dispatch = useDispatch();

    const sendMessage = (payload) => {
        socket.emit(types.SENDMSG, payload);
    };
    const sendLogin = (payload) => {
        socket.emit(types.LOGIN, payload);
    };

    const sendRegister = (payload) => {
        socket.emit(types.REGISTER, payload, (response) => {
            if (response.status === 200) {
                sendLogin(payload);
            }
        });
    };
    const sendLogout = () => {
        dispatch(action.actionLogout());
        socket.emit(types.LOGOUT);
    };

    const sendProposePlay = (payload) => {
        socket.emit(types.PROPOSEPLAY, payload);
    };

    const sendGame = (payload) => {
        socket.emit(types.GAMEDBINIT, payload);
    };

    const sendMove = (payload) => {
        dispatch(action.actionClearMC());
        socket.emit(types.MOVE, payload);
    };

    if (!socket) {
        socket = io.connect(SOCKET_SERVER_URL, {
            query: localStorage.getItem('token')
                ? { token: `Bearer ${localStorage.getItem('token')}` }
                : null,
            transports: ['websocket'],
        });
        socket.on(types.USERONLINE, (payload) => {
            dispatch({ type: types.USERONLINE, payload });
        });

        socket.on(types.USERONLINEADD, (payload) => {
            dispatch({ type: types.USERONLINEADD, payload });
        });

        socket.on(types.USERONLINEDEL, (payload) => {
            dispatch({ type: types.USERONLINEDEL, payload });
        });

        socket.on(types.SENDMSG, (payload) => {
            dispatch({ type: types.SENDMSG, payload });
        });

        socket.on(types.LOGIN, (payload) => {
            dispatch({ type: types.LOGIN, payload });
        });

        socket.on(types.LOGOUT, () => {
            dispatch(action.actionLogout());
        });

        socket.on(types.PROPOSEPLAY, (payload) => {
            dispatch({ type: types.PROPOSEPLAY, payload });
        });

        socket.on(types.GAMEDBINIT, (payload) => {
            dispatch({ type: types.GAMEDBINIT, payload });
            socket.emit(types.JOINROOM, payload.gameId);
        });
        socket.on(types.GAME, (payload) => {
            dispatch({ type: types.GAME, payload });
        });
        socket.on(types.MOVE, (payload) => {
            socket.emit(types.GAME, payload);
        });
        socket.on(types.ERROR, (payload) => {
            dispatch({ type: types.ERROR, payload });
        });

        ws = {
            sendMessage,
            sendLogin,
            sendRegister,
            sendLogout,
            sendProposePlay,
            sendGame,
            sendMove,
        };
    }
    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
};
