const socket = io("localhost:8080");

socket.on("connected", () => {
	console.log("Connected to server");
});

socket.on("message", (data) => {
	console.log(data);
	let n = document.createElement("li");
	n.style.margin = "10px";
	n.style.padding = "15px";
	n.style.borderRadius = "100vh";
	n.style.backgroundColor = "#7a29d0";
	n.style.width = "fit-content";

	n.innerText = data;
	msgs.appendChild(n);
});
// TODO: feat: to identify the user who sent the message

const btn = document.querySelector("#btn");
const msgs = document.querySelector("#messages");

btn.addEventListener("click", () => {
	let msg = document.querySelector("#msg").value;
	socket.emit("message", msg);
});

window.onkeydown = (e) => {
    if (e.key === "Enter") {
        let msg = document.querySelector("#msg").value;
        socket.emit("message", msg);
    }
}   
