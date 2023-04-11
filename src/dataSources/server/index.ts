import express, { Express, Request, Response } from 'express';
import apiRouterV1 from './routes/api/v1';
import cors from 'cors';

import { Server as ServerIo } from 'socket.io';
import http, { ServerResponse } from 'http';
import SocketServer from '../socket/interactors/server/interactors/SocketServer.interactor';
class Server {

  private app: Express;
  private port: string;

  constructor() {
    this.app = express();
    this.port = '3210';
    this.middlewares();
    this.routes();
  }
  middlewares() {

    this.app.use( cors() )

  }
  routes() {

    this.app.get('/', async (req: Request, res: Response) => {
      res.send('Express + TypeScript Server');
    });

    this.app.use('/api/v1', apiRouterV1);
  }

  async listen(): Promise<any> {

    try {
      const server: http.Server =  http.createServer(this.app);
      const socketServer: SocketServer = new SocketServer(new ServerIo(server));
      await socketServer.doWork()
      server.listen(this.port, () => {
        console.log(`⚡️[server]: Server is running at http://localhost:${this.port}`);
      });

    return undefined
    } catch (error) {
      console.log(error);
      throw new Error("Error to start server");
    }
  }

}

export default Server;
