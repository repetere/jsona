// @ts-ignore
import { Router, EventRouter, } from 'simple-socket-router/lib/router.mjs';
// ts-ignore
// //ts-ignore
import { getFunctionFromNameString, } from './props';
let once = false;

declare global {
  interface Window {
    io: any;
  }
}
export function initSockets(settings = {}) {
  // @ts-ignore
  const { useWebSocketsAuth, socket_server_options, socket_server, socket_disconnect_message, } = settings;
  // console.debug('CALLING initSockets');
  // @ts-ignore
  const createNotification = this.viewx.Functions.log;
  // @ts-ignore
  const getSocketFunction = ({ propFunc }) => getFunctionFromNameString({
    // @ts-ignore
    Functions: this.viewx.Functions,
    // @ts-ignore
    functionContext: this,
    functionName: propFunc
  });
  const router = new Router();
  router.addRoute('*',  (req:any)=> {
    const propFunc = req.body.function || req.path;
    const props = req.body && req.body.props && Array.isArray(req.body.props)
      ? req.body.props
      : [req.body,];
    // console.debug({ propFunc, props, once, req, });
    const reduxFunction = getSocketFunction({ propFunc, });
    // @ts-ignore
    if (reduxFunction) reduxFunction.call(this, ...props);
    // @ts-ignore
    else this.viewx.Functions.log({ type: 'error', error: new Error('Invalid Live Update') });
  });
  const socketOptions = Object.assign({
    // transports: [ 'websocket', ],
    reconnectionAttempts:10,
  }, socket_server_options);
  if (window.io) {
    
    const socket = (socket_server)
      ? window.io(socket_server, socketOptions)
      : window.io('', socketOptions);
    // @ts-ignore
    this.props.dispatch({
      type: "setSocket",
      socket,
    });
    // @ts-ignore
    this.props.setSocket(socket);
    socket.once('connect', () => {
      EventRouter({ socket, router, });
      socket.emit('authentication', {
        user: useWebSocketsAuth
        // @ts-ignore
        ? this.props.user
          : false,
        reconnection: true,
      });
    });
      // @ts-ignore

    socket.on('error', (e) => createNotification({ type: 'error', error: e }) );
    socket.on('connect_error', (e:Error) => console.debug(e));
    socket.on('disconnect', (reason:string) => {
      if (once === false && socket_disconnect_message) {
        createNotification({
          data: `Live Updated Disconnected: ${reason}. Refresh for live updates`,
        });
        once = true;
      }
    });
    socket.on('reconnect', ( attemptNumber:number ) => {
      socket.emit('authentication', {
        user: useWebSocketsAuth
          // @ts-ignore
          ? this.props.user
          : false,
        reconnection: true,
      });
      createNotification({
        type: 'info',
        data:'Reconnected to Live',
        meta: { attemptNumber, },
      });
    });
    socket.on('reconnecting', (attemptNumber:number) => {
      createNotification({
        type: 'error',
        data:'reconnecting socket',
        meta: { attemptNumber, },
      });
      // console.debug('reconnecting', );
    });
    if (useWebSocketsAuth) {
      // console.debug('REAUTH',this.state.user)
      socket.emit('authentication', {
        // @ts-ignore
        user: this.props.user,
        reconnection: true,
      });
    }
    socket.on('authenticated', () => {
      // use the socket as usual
      socket.emit('/user/createrepl', {
        user: useWebSocketsAuth
          // @ts-ignore
          ? this.props.user
          : false,
        reconnection: true,
        authSend: 0,
      });
    });
  }
//   // this.previousRoute = {};
}