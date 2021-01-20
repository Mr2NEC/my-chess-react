import io from 'socket.io-client';

const SOCKET_SERVER_URL = 'http://localhost:4000';

export const socket = io(SOCKET_SERVER_URL, {
    query: localStorage.token ? { token: `Bearer ${localStorage.token}` } : {},
});
