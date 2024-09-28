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
	console.log(`user logged ${socket.id}`);
	socket.emit("connected");
	socket.on("message", (data) => {
		// who has sent the message?
		io.emit("message", data);
		console.log(data);
	});
	socket.on("disconnect", () => {
		console.log("user disconnected",socket.id);
	});
});

server.listen(8080,()=>{
    console.log("server running");
    
})
