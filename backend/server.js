const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");

const wss = new WebSocket.Server({server});


server.listen(3000, () => {
	console.log("server is up on port 3000");
});