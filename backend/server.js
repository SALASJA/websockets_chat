const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");
const wss = new WebSocket.Server({server});

wss.on("connection", function connection(ws) {
	console.log("a new client connection");
	ws.send("welcome new client");
});


server.listen(3000, () => {
	console.log("server is up on port 3000");
});