const socket = io();

const welcome = document.querySelector("#welcome");
const form = welcome.querySelector("form");

function handleRoomSubmit(event) {
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", { payload: input.value }, () => {
    console.log("server is done!");
  }); // socket.emit의 마지막 arg는 function이 올 수 있음 & 마지막만 올 수 있음
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);
