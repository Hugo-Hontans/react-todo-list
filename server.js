const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

// Connexion to DB
mongoose
  .connect("mongodb://localhost/db")
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((e) => {
    console.log("Error while DB connecting");
    console.log(e);
  });

const app = express();

// Body Parser
const urlencodedParser = bodyParser.urlencoded({
  extended: true
});
app.use(urlencodedParser);

app.use(bodyParser.json());

// Definition of CORS
app.use(function(req, res, next) {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

//Definition of router
const router = express.Router();
app.use("/user", router);
require(__dirname + "/controllers/userController")(router);
app.use("/todoList", router);
require(__dirname + "/controllers/todoListController")(router);

// Definition of listening port
const port = 8800;
app.listen(port, () => console.log(`Listening on port ${port}`));