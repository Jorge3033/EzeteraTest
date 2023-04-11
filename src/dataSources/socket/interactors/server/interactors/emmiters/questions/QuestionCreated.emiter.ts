// import { Server as ServerIo, Socket } from "socket.io";

// import { SocketsEvent, GlovalEventSenderResponse } from '../../../../../entities/SocketsEvent.entity';
// import { ISocketEventEmmiter } from '../../../entities/SocketsEventEmmiter.entity';

// export default class QuestionCreatedEmiter implements ISocketEventEmmiter{
//   constructor(
//     private io: ServerIo,
//     private question: SocketsEvent<QuestionList>
//   ) {}

//   doWork(): void {
//     try {
//       const event: SocketsEvent<QuestionList> =
//       GlovalEventSenderResponse<QuestionList>(
//           this.question.data,
//           this.question.event_name
//         );
//       this.io.emit(event.event, event);
//     } catch (error) {
//       console.log(error);
//       throw new Error("Error to start socket server");
//     }
//   }
// }