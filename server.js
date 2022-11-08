const express = require("express");
const passport = require("passport");
const applyPassportStrategy = require("./app/helpers/passport");
const { createServer } = require("http");
const app = express();
const port = process.env.PORT || 3001;
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

applyPassportStrategy(passport);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(passport.initialize());

// require("./app/helpers/passport")(passport);
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// socket.io
io.on("connection", (socket) => {
  console.log("a user connected" + socket.id);
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
    io.emit("chat message", msg);
  });
});

server.listen(port, () =>
  console.log("express server running on port " + port)
);

var routes = require("./app/routes/appRoutes"); //importing route
routes(app); //register the route
