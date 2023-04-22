// load the express module
const express = require("express");

// initialize a new express application
const app = express();

// Loading the environment variables from the .env file.
require("dotenv").config();

// configure server settings

// set the server listening port
const PORT = process.env.PORT || 5555;

// middlewares

// Telling the application to use the express.json() middleware. This middleware will parse the body of
// any request that has a Content-Type of application/json.
app.use(express.json());

// This is a route handler. It is listening for a GET request to the root route of the application.
// When it receives a request, it will send back a response with the string "Hello World!".
app.get("/", (req, res) => {
  res.send("Hello World!");
});

console.log(`express server ready for requests on port ${PORT}!`);

// allow express to listen for incoming requests
app.listen(PORT);
