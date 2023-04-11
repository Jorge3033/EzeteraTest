export interface SocketsEvent<T> {
  event: string
  event_name: string
  data: T
  proved_in: string
}

export function GlovalEventSenderResponse<T> (data: T, event_name: string): SocketsEvent<T> {
  return {
    event: `global_server:${event_name}`,
    event_name,
    data,
    proved_in: 'server',
  }
}