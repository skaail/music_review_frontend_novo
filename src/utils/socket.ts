import { io } from 'socket.io-client';

let socket: any;

export const getSocket = () => {
    if (!socket) {
        socket = io('http://localhost:4000', {
            withCredentials: true,
            extraHeaders: {
                'my-custom-header': 'abcd' // Add any custom headers if needed
            }
        });
    }
    return socket;
};