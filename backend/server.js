const http = require("http");
const app = require("./app");
const { Server } = require("socket.io");

const PORT   = process.env.PORT || 4500;
const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }       
});
module.exports.io = io;       

server.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
