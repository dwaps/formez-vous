import express from 'express';
import { SERVER_PORT } from '../global/environment';
import socketIO, { Socket } from "socket.io";
import http from "http";
import * as socket from '../sockets/socket';

export default class Server {
  private static _instance: Server = new Server();
  
  public app: express.Application;
  public port: number;

  public httpServer: http.Server;
  public io: socketIO.Server;

  private constructor() {
    if (Server._instance) {
      throw new Error(`Singleton : création d'une instance interdite !`);
    }

    this.app = express();
    this.port = SERVER_PORT;

    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);

    this.listenSockets();
    Server._instance = this;
  }

  public listenSockets() {
    this.io.on('connection', (client: Socket) => {
      socket.connectUser(client);
      socket.disconnectUser(client);
      socket.onConfigUser(client);
      socket.onMessage(client, this.io);
    });
  }

  public static get instance() {
    return Server._instance;
  }

  start(callback: Function) {
    this.httpServer.listen(this.port, callback);
  }
}

