import React, { createContext } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { SENDMSG, LOGIN, REGISTER, LOGOUT } from './type';
// import { actionUpdateChat } from './actions';
import { actionLogin, actionLogout } from './action/actionAuth';

const SOCKET_SERVER_URL = 'http://localhost:4000';
const WebSocketContext = createContext(null);

export { WebSocketContext };

export default ({ children }) => {
    let socket;
    let ws;

    const dispatch = useDispatch();

    const sendMessage = (payload) => {
        socket.emit('message', { type: SENDMSG, ...payload });
        // dispatch(updateChatLog(payload));
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

    if (!socket) {
        socket = io.connect(SOCKET_SERVER_URL, {
            query: localStorage.token
                ? { token: `Bearer ${localStorage.token}` }
                : null,
            transports: ['websocket'],
        });

        socket.on(SENDMSG, (payload) => {
            // dispatch(updateChatLog(payload));
        });

        socket.on(LOGIN, (payload) => {
            dispatch(actionLogin(payload));
        });

        ws = {
            socket: socket,
            sendMessage,
            sendLogin,
            sendRegister,
            sendLogout,
        };
    }
    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
};
