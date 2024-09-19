const socket = new WebSocket('ws://localhost:8080')

socket.onmessage = ({data})=>{
    console.log(data);
    let n = document.createElement('li')
    n.innerText = data
    msgul.appendChild(n)    
    
}

let btn = document.querySelector("#btn")
let msg = document.querySelector("#msg").value
let msgul = document.querySelector("#messages")

btn.addEventListener("click",()=>{
    socket.send(msg);
})