const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();

const courses = require("../backend/routes/courses");
const home = require("../backend/routes/home");
const logger = require("./middleware/logger");
const auth = require("./middleware/auth");
const ConnectDB = require("./config/dbConfig");


// Connect to the database
ConnectDB();


//set the view engine to pug
app.set("view engine", "pug");

app.set("views", "./views"); //default

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

app.use("/api/courses", courses);
app.use("/", home);

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
app.use(auth);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
