const { io } = require("socket.io-client");
const URL = process.env.NODE_ENV === 'production' ? 'https://online-drawing-tool-1-jdt9.onrender.com':'http://localhost:5000';
export const socket = io(URL);