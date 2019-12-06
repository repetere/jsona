import { Router, EventRouter } from "simple-socket-router";
import { getFunctionFromNameString } from "./props";
import { VXAFunctionContext, VXAFunction } from "../../../types";
// import { insertScriptParams } from '../../internal_types/config';
let once = false;

declare global {
  interface Window {
    io: any;
  }
}
export function initSockets(
  this: VXAFunctionContext,
  settings: any = {}
): void {
  const {
    useWebSocketsAuth,
    socket_server_options,
    socket_server,
    socket_disconnect_message
  } = settings;
  const createNotification = this.viewx.Functions.log;

  const getSocketFunction = ({ propFunc }: { propFunc: string }): VXAFunction =>
    getFunctionFromNameString({
      Functions: this.viewx.Functions,
      functionContext: this,
      functionName: propFunc
    });
  // @ts-ignore
  const router = Router();
  router.addRoute("*", (req: any) => {
    const propFunc = req.body.function || req.path;
    const props =
      req.body && req.body.props && Array.isArray(req.body.props)
        ? req.body.props
        : [req.body];
    // console.debug({ propFunc, props, once, req, });
    const reduxFunction = getSocketFunction({ propFunc });
    if (reduxFunction) reduxFunction.call(this, ...props);
    else
      this.viewx.Functions.log({
        type: "error",
        error: new Error("Invalid Live Update")
      });
  });
  const socketOptions = Object.assign(
    {
      // transports: [ 'websocket', ],
      reconnectionAttempts: 10
    },
    socket_server_options
  );
  if (window.io) {
    const socket = socket_server
      ? window.io(socket_server, socketOptions)
      : window.io("", socketOptions);
    this.props.dispatch({
      type: "setSocket",
      socket
    });
    this.props.setSocket(socket);
    socket.once("connect", () => {
      EventRouter({ socket, router });
      socket.emit("authentication", {
        user: useWebSocketsAuth ? this.props.user : false,
        reconnection: true
      });
    });

    socket.on("error", (e: Error) =>
      createNotification({ type: "error", error: e })
    );
    socket.on("connect_error", (e: Error) => console.debug(e));
    socket.on("disconnect", (reason: string) => {
      if (once === false && socket_disconnect_message) {
        createNotification({
          data: `Live Updated Disconnected: ${reason}. Refresh for live updates`
        });
        once = true;
      }
    });
    socket.on("reconnect", (attemptNumber: number) => {
      socket.emit("authentication", {
        user: useWebSocketsAuth ? this.props.user : false,
        reconnection: true
      });
      createNotification({
        type: "info",
        data: "Reconnected to Live",
        meta: { attemptNumber }
      });
    });
    socket.on("reconnecting", (attemptNumber: number) => {
      createNotification({
        type: "error",
        data: "reconnecting socket",
        meta: { attemptNumber }
      });
      // console.debug('reconnecting', );
    });
    if (useWebSocketsAuth) {
      // console.debug('REAUTH',this.state.user)
      socket.emit("authentication", {
        user: this.props.user,
        reconnection: true
      });
    }
    socket.on("authenticated", () => {
      // use the socket as usual
      socket.emit("/user/createrepl", {
        user: useWebSocketsAuth ? this.props.user : false,
        reconnection: true,
        authSend: 0
      });
    });
  }
  //   // this.previousRoute = {};
}
