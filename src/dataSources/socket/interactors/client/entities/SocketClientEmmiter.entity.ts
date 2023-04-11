
import { SocketsEvent } from "../../../entities/SocketsEvent.entity";

export interface ISocketClientEmmiter {
  emmit<T>(socketEvent: SocketsEvent<T>): Promise<void>;
}
