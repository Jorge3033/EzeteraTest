import io from 'socket.io-client';
import { SocketsEvent } from '../../../entities/SocketsEvent.entity';
import { ISocketClientEmmiter } from '../entities/SocketClientEmmiter.entity';

export default class SocketServerClientEmmiter implements ISocketClientEmmiter {

  private socket;
  private readonly clientServer: string = 'http://localhost:3203';

  constructor() {
    this.socket  = io(this.clientServer);
  }

  async emmit<T>(socketEvent: SocketsEvent<T>): Promise<void> {
    try {
      await this.socket.emit(socketEvent.event , socketEvent );
    } catch (error) {
      console.log(error);
      throw new Error("Error to emmit event");
    }
  }
}