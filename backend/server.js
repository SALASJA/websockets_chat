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
	
	ws.on("message", function incoming(data, isBinary){
		//console.log("received: ", message.toString());
		//ws.send(`${message.toString()}`);
		wss.clients.forEach(function each(client) {
      		if (client !== ws && client.readyState === WebSocket.OPEN) {
        		client.send(data, { binary: isBinary });
      		}
    	});
	});
	
});


app.get("/", function(req, res){
	res.render("index.html");
});


server.listen(3000, () => { //just change 3000 to 80 for simple deployment to the web (dont forget to log in to your router, usually at 192.168.1.1, and port forward 80 as well, then user can come user it using your public ip).
	console.log("server is up on port 3000");
});