import { Server as ServerIo, Socket } from "socket.io";
import { SocketsEvent } from "../../../entities/SocketsEvent.entity";
import { IServerSocket } from "../entities/ServerSocket.entity";

export default class SocketServer extends IServerSocket {
  constructor(private io: ServerIo) {
    super(io);
  }

  async doWork(): Promise<ServerIo> {
    try {
      await this.io.on("connection", (socket: Socket) => {
        console.log("New client connected");
        this.eventListener(socket);
      });
      return this.io;
    } catch (error) {
      console.log(error);
      throw new Error("Error to start socket server");
    } //console.log('io')     ;
  }

  eventListener(socket: Socket): void {}
}
