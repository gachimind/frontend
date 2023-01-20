import { io, Socket } from 'socket.io-client';

const socketInstance: Socket = io(process.env.REACT_APP_API_SOCKET || process.env.REACT_APP_API_ENDPOINT || 'http://localhost:8080');

const on = (event: string, callback: (...args: any[]) => void) => {
  socketInstance.on(event, callback);
};

const off = (event: string) => {
  socketInstance.off(event);
};

// TODO: 예외 핸들링이 추가되어야 한다.
const emit = (event: string, ...args: any[]) => {
  socketInstance.emit(event, ...args);
};

export default { socketInstance, on, off, emit };
