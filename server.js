const express = require("express");
const httpServer = require('http');

const app = express();
const PORT = 3000;
const server =  httpServer.createServer(app)
const io = require("socket.io")(server, {cors:{origin: "*"}});

io.on("connection", (socket) =>{
    

    console.log("CONNECTION ESTABLISHED")
    socket.on("joined", (data) => {
        socket.join(data)
        console.log("USER WITH ID "+socket.id+" HAS JOINED THE ROOM "+data);
    })

    socket.on("send_message", (data) => {
           
            socket.broadcast.emit("receive_message", data);
        
    })

    

    socket.on("disconnected", () => {
        console.log("USER WITH ID "+socket.id+" HAS LEFT THE CHAT");
    })
})

server.listen(PORT,() => {
    console.log(`SERVER IS RUNNING localhost ${PORT}`)
})