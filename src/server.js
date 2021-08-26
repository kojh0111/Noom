import http from "http";
import express from "express";
import SocketIO from "socket.io";
// import WebSocket from "ws";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const handleListen = () => console.log(`Listening on http://localhost:3000`);

const server = http.createServer(app); // http 위에 webSocket을 연결하기 위함
const io = SocketIO(server);

io.on("connection", (socket) => {
  console.log(socket);
});

/*
const wss = new WebSocket.Server({ server }); // wss과 http가 같은 포트에서 실행됨

const sockets = [];

wss.on("connection", (socket) => {
  sockets.push(socket);
  socket["nickname"] = "Anon";
  console.log("Connected to Browser ✅");
  socket.on("close", () => console.log("Disconnected from the Browser ❌"));
  socket.on("message", (message) => {
    const formdata = JSON.parse(message);
    switch (formdata.type) {
      case "new_message":
        sockets.forEach((aSocket) =>
          aSocket.send(`${socket.nickname}: ${formdata.payload}`)
        );
      case "nickname":
        socket["nickname"] = formdata.payload;
    }
  });
}); // 여기에서 socket은 연결된 브라우저를 의미
*/

server.listen(3000, handleListen);
