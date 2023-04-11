import { Server as ServerIo } from 'socket.io';

export abstract class IServerSocket {
  constructor(private socketsIo: ServerIo) {}
  abstract doWork(): Promise<ServerIo>;
}