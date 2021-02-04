import React, { createContext } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { SENDMSG, LOGIN, REGISTER, LOGOUT,USERONLINE, USERONLINEADD, USERONLINEDEL, PROPOSEPLAY, JOINROOM, GAMEDBINIT, GAME, MOVE, CLEANMC, ERROR, ERRORHIDE } from './type';

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
        dispatch({ type: LOGOUT });
    };

    const sendProposePlay= (payload) => {
        socket.emit(PROPOSEPLAY, payload);
    };

    const sendGame= (payload) => {
        socket.emit(GAMEDBINIT, payload);
    };

    const sendMove= (payload) => {
        dispatch({ type: CLEANMC });
        socket.emit( MOVE, payload);
    };

    const sendErrorHide = ()=>{
        dispatch({ type: ERRORHIDE });
    }

    if (!socket) {
        socket = io.connect(SOCKET_SERVER_URL, {
            query: localStorage.token
                ? { token: `Bearer ${localStorage.token}` }
                : null,
            transports: ['websocket'],
        });
        socket.on(USERONLINE, (payload) => {
            dispatch({ type: USERONLINE, payload });
        });

        socket.on(USERONLINEADD, (payload) => {
            dispatch({ type: USERONLINEADD, payload });
        });
        
        socket.on(USERONLINEDEL, (payload) => {
            dispatch({ type: USERONLINEDEL, payload });
        });

        socket.on(SENDMSG, (payload) => {
            dispatch({ type: SENDMSG, payload });
        });

        socket.on(LOGIN, (payload) => {
            dispatch({ type: LOGIN, payload });
        });

        socket.on(LOGOUT, ()=> {
            localStorage.removeItem('token');
            dispatch({ type: LOGOUT });
        });

        socket.on(PROPOSEPLAY, (payload) => {
            dispatch({ type: PROPOSEPLAY, payload });
        });

        socket.on(GAMEDBINIT, (payload) => {
            dispatch({ type: GAMEDBINIT, payload });
            socket.emit(JOINROOM, payload.gameId);
        });
        socket.on(GAME, (payload) => {
            dispatch({ type: GAME, payload });
        });
        socket.on(MOVE, (payload) => {
            socket.emit(GAME, payload);
        });
        socket.on(ERROR, (payload) => {
            dispatch({type:ERROR, payload})
        });

        ws = {
            socket: socket,
            sendMessage,
            sendLogin,
            sendRegister,
            sendLogout,
            sendProposePlay,
            sendGame,
            sendMove,
            sendErrorHide 
        };
    }
    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
};
