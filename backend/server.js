const express = require("express");
const multer = require("multer");
const cors = require("cors");
const path = require("path");
const WebSocket = require("ws");
const { setupWSConnection } = require("y-websocket/bin/utils");

const app = express();
const upload = multer({ dest: "uploads/" }); // Directory for file uploads

app.use(cors());
app.use(express.json());

// File upload route
app.post("/upload", upload.single("file"), (req, res) => {
  res.json({
    filePath: `/uploads/${req.file.filename}`,
    originalName: req.file.originalname,
  });
});

// Serve uploaded files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Create a WebSocket server
const wss = new WebSocket.Server({ port: 1234 });
wss.on("connection", (ws, req) => {
  const user = req.url.split("?")[1]; // Optional: parse query params for user info
  setupWSConnection(ws, req, { user });
});
console.log("Yjs WebSocket server running on ws://localhost:1234");

// Start Express server
app.listen(3000, () => {
  console.log("Backend running on http://localhost:3000");
});
