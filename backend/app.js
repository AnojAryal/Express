const startupDebugger=require('debug')('app:startup')
const dbDebugger=require('debug')('app:db')
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();

const logger = require('./logger')
const auth = require('./auth')

//set the view engine to pug
app.set("view engine", "pug");

app.set("views", "./views"); //default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());


// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host"));
console.log("Mail Password: " + config.get("mail.auth.password"));


if (app.get("env") === "development") {
  //logs the request method and url
  app.use(morgan("tiny")); 
  startupDebugger("Morgan enabled...");
}

//Db work...
dbDebugger("Connected to the database...");
 

//serve static files
app.use(express.static("public"));

app.use(logger);
app.use(auth)

//using template engine
app.get("/", (req, res) => {
  res.render("index", { title: "My Express App", message: "Hello" });
});

app.get("/api/courses", (req, res) => {
  res.send([1, 2, 3]);
});

app.get("/api/courses/:id", (req, res) => {
    res.send(req.params.id);
});

app.get("/api/posts/:year/:month", (req, res) => {
    res.send(req.params);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
