const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors  = require('cors');

const app = express();
// Enable CORS for all routes
app.use(cors());
const server = createServer(app);
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log("user logged");
	socket.emit("connected");
	socket.on("message", (data) => {
		io.emit("message", data);
		console.log(data);
	});
	socket.on("disconnect", () => {
		console.log("user disconnected");
	});
});

server.listen(8080,()=>{
    console.log("server running");
    
})
