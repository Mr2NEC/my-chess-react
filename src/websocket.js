import SocketIo from 'socket.io-client';

function createEventChannel(io) {
    return eventChannel((emit) => {
        io.on('connect', (socket) => {
            emit({
                type: 'socket',
                socket: io.id,
            });
        });

        io.on('reconnect', () => {
            console.dir(`socketio reconnect`);
        });

        io.on('message', (message) => {
            emit(message);
        });

        return () => {
            io.close();
        };
    });
}
