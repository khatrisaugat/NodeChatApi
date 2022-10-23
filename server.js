const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

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

app.listen(port, () => console.log("express server running on port 3000.."));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var routes = require("./app/routes/appRoutes"); //importing route
routes(app); //register the route
