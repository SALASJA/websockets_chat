const express = require("express");
const app = express();
const server = require("http").createServer(app);
const WebSocket = require("ws");
const wss = new WebSocket.Server({server});

app.set("view options", {layout: false});
app.use(express.static(__dirname + "/../frontend"));


wss.on("connection", function connection(ws) {
	console.log("a new client connection");
	ws.send("welcome new client");
	
	ws.on("message", function incoming(message){
		console.log("received: " + message);
		//ws.send("Got your message its: " + message);
		wss.clients.forEach(function each(client){
			if(client !== ws && client.readyState === WebSocket.OPEN){
				client.send(`${message}`);
			}
		});
	});
	
});


app.get("/", function(req, res){
	res.render("index.html");
});


server.listen(3000, () => {
	console.log("server is up on port 3000");
});