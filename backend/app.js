const morgan = require("morgan");
const helmet = require("helmet");
const express = require("express");
const app = express();
const logger = require('./logger')
const auth = require('./auth')

 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

//logs the request method and url
app.use(morgan("tiny"));

//serve static files
app.use(express.static("public"));

app.use(logger);
app.use(auth)

app.get("/", (req, res) => {
  res.send("Hello World!");
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
