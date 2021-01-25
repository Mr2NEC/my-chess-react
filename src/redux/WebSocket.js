import React, { createContext } from 'react';
import io from 'socket.io-client';
import { useDispatch } from 'react-redux';
import { SENDMSG, LOGIN, REGISTER } from './type';
// import { actionUpdateChat } from './actions';
import { actionLogin, actionRegister } from './action/actionAuth';

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
        socket.emit('message', { type: LOGIN, ...payload });
    };

    const sendRegister = async(payload) => {
        console.log('click');
      let reg= await socket.emit(REGISTER, { ...payload }, (data)=>console.log(data));
      if(reg === 200){
        socket.emit('message', { type: LOGIN, ...payload }); 
      }
    };

    if (!socket) {
        socket = io.connect(SOCKET_SERVER_URL, {
            query: localStorage.token
                ? { token: `Bearer ${localStorage.token}` }
                : null,
            transports: ['websocket'],
        });

        socket.on('message', (data) => {
            console.log(data);
            switch (data.type) {
                case SENDMSG:
                    // dispatch(actionUpdateChat(payload));
                    break;
                case LOGIN:
                    dispatch(actionLogin(data.payload));
                    break;

                default:
                    break;
            }
        });

        ws = {
            socket: socket,
            sendMessage,
            sendLogin,
            sendRegister,
        };
    }
    return (
        <WebSocketContext.Provider value={ws}>
            {children}
        </WebSocketContext.Provider>
    );
};
