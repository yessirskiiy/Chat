import io from "socket.io-client";

const socket = io(window.location.origin.replace("https://chat-steel-eight.vercel.app", "5000"));

export default socket;