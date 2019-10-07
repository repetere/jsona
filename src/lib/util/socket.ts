// // import { Router, EventRouter, } from 'simple-socket-router/lib/router.mjs';
// //ts-ignore
// import { Router, EventRouter, } from 'simple-socket-router/bundle/router.esm.js';
// //ts-ignore
// import { getFunctionFromProps, } from '../ResponsiveForm/FormHelpers';
// let once = false;

export function initSockets(options = {}) {
//   const { auth, } = options;
//   // console.debug('CALLING initSockets');
//   // console.debug({auth},'this.state',this.state)
//   this.getSocketFunction = getFunctionFromProps.bind(this);
//   const router = new Router();
//   router.addRoute('*',  (req)=> {
//     const propFunc = req.body.function || req.path;
//     const props = req.body && req.body.props && Array.isArray(req.body.props)
//       ? req.body.props
//       : [req.body,];
//     // console.debug({ propFunc, props, once, req, });
//     const reduxFunction = this.getSocketFunction({ propFunc, });
//     if (reduxFunction) reduxFunction.call(this, ...props);
//     // else this.props.errorNotification(new Error('Invalid Live Update'));
//   });
//   const socketOptions = Object.assign({
//     // transports: [ 'websocket', ],
//     reconnectionAttempts:10,
//   }, this.state.settings.socket_server_options);
//   const socket = (this.state.settings.socket_server)
//     ? window.io(this.state.settings.socket_server, socketOptions)
//     : window.io('', socketOptions);
//   this.props.setSocket(socket);
//   socket.once('connect', () => {
//     EventRouter({ socket, router, });
//     socket.emit('authentication', {
//       user: auth
//         ? this.state.user
//         : false,
//       reconnection: true,
//     });
//   });
//   socket.on('error', (e) => this.props.createLog({
//     type:'error',
//     meta: e,
//   }));
//   socket.on('connect_error', (e) => console.debug(e));
//   socket.on('disconnect', (reason) => {
//     if (once === false && this.state.settings.socket_disconnect_message) {
//       this.props.createNotification({
//         text: `Live Updated Disconnected: ${reason}. Refresh for live updates`,
//       });
//       once = true;
//     }
//   });
//   socket.on('reconnect', ( attemptNumber ) => {
//     socket.emit('authentication', {
//       user: auth
//         ? this.state.user
//         : false,
//       reconnection: true,
//     });
//     this.props.createLog({
//       type: 'highlight',
//       message:'Reconnected to Live',
//       meta: { attemptNumber, },
//     });
//   });
//   socket.on('reconnecting', (attemptNumber) => {
//     this.props.createLog({
//       type: 'error',
//       message:'reconnecting socket',
//       meta: { attemptNumber, },
//     });
//     // console.debug('reconnecting', );
//   });
//   // if (auth) {
//   //   // console.debug('REAUTH',this.state.user)
//   //   socket.emit('authentication', {
//   //     user: this.state.user,
//   //     reconnection: true,
//   //   });
//   // }
//   socket.on('authenticated', () => {
//     // use the socket as usual
//     socket.emit('/user/createrepl', {
//       user: auth
//         ? this.state.user
//         : false,
//       reconnection: true,
//       authSend: 0,
//     });
//   });
//   // this.previousRoute = {};
}