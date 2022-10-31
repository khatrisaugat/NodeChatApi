const express = require("express");
const { createServer } = require("http");
const app = express();
const port = process.env.PORT || 3000;
const { Server } = require("socket.io");
// connection configurations
// const mySqlConnection = require("./app/helpers/db");
const db = require("./app/helpers/db");

// connect to database
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// socket.io
io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () => console.log("express server running on port 3000.."));

var routes = require("./app/routes/appRoutes"); //importing route
routes(app); //register the route
