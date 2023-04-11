import Server from "./dataSources/server/index";

const server: Server = new Server();

server
  .listen()
  .then(() => {
    console.log("Server running");
  })
  .catch((error) => {
    console.log(error);
  });
