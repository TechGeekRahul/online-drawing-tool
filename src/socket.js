const { io } = require("socket.io-client");

export const socket = io("localhost:5000")