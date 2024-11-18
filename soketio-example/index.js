const express = require("express");
const app = express();
const http = require("http");
const { matchesGlob } = require("path");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// io là socket tổng còn mấy cái kia chỉ là 1 phía
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);
  socket.emit("SEVER_SEND_SOCKET_ID", socket.id);
  socket.on("CLIENT_SEND_MESSAGE", (msg) => {
    console.log("message: " + msg);
    // Hết socket luôn
    // io.emit("SEVER_RETURN_MESSAGE", msg);
    // Ngoại trừ socket gửi
    socket.broadcast.emit("SEVER_RETURN_MESSAGE", msg);
  });
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
