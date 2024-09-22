const socket = io("localhost:8080");

socket.on("connected",()=>{
    console.log("Connected to server");
})

socket.on("message",(data)=>{
    console.log(data);
    let n = document.createElement('li')
    n.innerText = data;
    msgs.appendChild(n)   
})

const btn = document.querySelector("#btn");
const msgs = document.querySelector("#messages");

btn.addEventListener("click",()=>{
    let msg = document.querySelector("#msg").value
    socket.emit('message',msg);
})    

