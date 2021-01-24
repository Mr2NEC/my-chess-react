
import socketOpen from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:4000';

export const socket = socketOpen(SOCKET_SERVER_URL,{
    query: localStorage.token ? 
    { token: `Bearer ${localStorage.token}` }
    : null,
    transports: ['websocket'],
    auth: localStorage.connectionId?{connectionId:localStorage.connectionId}:{}
});




