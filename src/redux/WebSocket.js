import React, { createContext } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { SENDMSG, LOGIN, REGISTER, LOGOUT,USERONLINE, USERONLINEADD, USERONLINEDEL, PROPOSEPLAY, JOINROOM, GAMEDBINIT, GAME, MOVE } from './type';
// import { actionUpdateChat } from './actions';
import { actionLogin, actionLogout, actionUserOnline, actionUserOnlineAdd, actionUserOnlineDel, actionProposePlay, actionGameDb, actionGame, actionMessage,actionMove } from './action/action';

const SOCKET_SERVER_URL = 'http://localhost:4000';
const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
    let socket;
    let ws;

    const dispatch = useDispatch();

    const sendMessage = (payload) => {
        socket.emit(SENDMSG, payload);
    };
    const sendLogin = (payload) => {
        socket.emit(LOGIN, payload);
    };

    const sendRegister = (payload) => {
        socket.emit(REGISTER, payload, (response) => {
            if (response.status === 200) {
                sendLogin(payload);
            }
        });
    };
    const sendLogout = () => {
        localStorage.removeItem('token');
        socket.emit(LOGOUT);
        dispatch(actionLogout());
    };

    const sendProposePlay= (payload) => {
        socket.emit(PROPOSEPLAY, payload);
    };

    const sendGame= (payload) => {
        socket.emit(GAMEDBINIT, payload);
    };
    const sendMove= (payload) => {
        dispatch(actionMove());
        socket.emit( MOVE, payload);
    };

    if (!socket) {
        socket = io.connect(SOCKET_SERVER_URL, {
            query: localStorage.token
                ? { token: `Bearer ${localStorage.token}` }
                : null,
            transports: ['websocket'],
        });
        socket.on(USERONLINE, (payload) => {
            dispatch(actionUserOnline(payload));
        });

        socket.on(USERONLINEADD, (payload) => {
            dispatch(actionUserOnlineAdd(payload));
        });
        
        socket.on(USERONLINEDEL, (payload) => {
            dispatch(actionUserOnlineDel(payload));
        });

        socket.on(SENDMSG, (payload) => {
            dispatch(actionMessage(payload));
        });

        socket.on(LOGIN, (payload) => {
            dispatch(actionLogin(payload));
        });

        socket.on(PROPOSEPLAY, (payload) => {
            dispatch(actionProposePlay(payload));
        });

        socket.on(GAMEDBINIT, (payload) => {
            dispatch(actionGameDb(payload));
            socket.emit(JOINROOM,payload.gameId);
        });
        socket.on(GAME, (payload) => {
            dispatch(actionGame(payload));
        });
        socket.on(MOVE, (payload) => {
            socket.emit(GAME, payload);
        });

        ws = {
            socket: socket,
            sendMessage,
            sendLogin,
            sendRegister,
            sendLogout,
            sendProposePlay,
            sendGame,
            sendMove
        };
    }
    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
};
