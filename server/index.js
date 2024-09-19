const webSocket = require("ws")

const server = new webSocket.Server({port:8080});

server.on("connection",(socket)=>{
    socket.on("message",(msg)=>{
        socket.send(`Hello ${msg}`);
    });
});