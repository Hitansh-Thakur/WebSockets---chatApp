const socket = io("localhost:8080");

socket.on("connected", () => {
	console.log("Connected to server",socket.id);
	
});

socket.on("message", ({Msg,userId}) => {
	console.log(msg);
	let n = document.createElement("li");
	n.style.margin = "10px";
	n.style.padding = "8px 12px";
	n.style.borderRadius = "100vh";
	n.style.backgroundColor = "#7a29d0";
	n.style.width = "fit-content";
	n.style.marginLeft = userId == socket.id ? "auto" : "0";

	n.innerText = Msg;
	msgs.appendChild(n);
});
// TODO: feat: to identify the user who sent the message

const btn = document.querySelector("#btn");
const msgs = document.querySelector("#messages");

btn.addEventListener("click", () => {
	let msg = document.queryselector("#msg");
	socket.emit("message", { msg: msg.value, userid: socket.id });
	msg.value = "";
	msg.focus();	
});

window.onkeydown = (e) => {
    if (e.key === "Enter") {
		let msg = document.queryselector("#msg");
		socket.emit("message", { msg: msg.value, userid: socket.id });
		msg.value= "";
		msg.focus();	
	}
}   
