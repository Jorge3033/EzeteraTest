import { SocketsEvent } from '../../../entities/SocketsEvent.entity';

export function EventClientSenderResponse<T> (data: T, event_name: string): SocketsEvent<T> {
  return {
    event: `client:${event_name}`,
    event_name,
    data,
    proved_in: 'server',
  }
}