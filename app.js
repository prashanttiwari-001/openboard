const express = require("express");
const socket = require("socket.io");

const app = express();  // initialized and server ready

app.use(express.static("public"));

let port  = 3000;
let server  = app.listen(port, () =>{
    console.log("listening to port" + port);
})

let io = socket(server);

// on is a type of listener
io.on("connection", (socket)=>{
    console.log("Made socket connection");

    // receive data
    socket.on("beginPath",(data)=>{
        // now transfer data to all connected computers
        io.sockets.emit("beginPath", data);
    })

    socket.on("drawStroke",(data)=>{
        io.sockets.emit("drawStroke",data);
    })

    socket.on("redoUndo",(data)=>{
        io.sockets.emit("redoUndo",data);
    })
})