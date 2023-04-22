// load the express module
const express = require("express");
const mongoose = require("mongoose");

// initialize a new express application
const app = express();

// Loading the environment variables from the .env file.
require("dotenv").config();

// mock database to store our books
let booksList = [];

// configure server settings

// set the server listening port
const PORT = process.env.PORT || 5555;
const MONGODB_URI = process.env.MONGODB_CONNECTION_URI;

// middlewares

// Telling the application to use the express.json() middleware. This middleware will parse the body of
// any request that has a Content-Type of application/json.
app.use(express.json());

// This is a route handler. It is listening for a GET request to the root route of the application.
// When it receives a request, it will send back a response with the string "Hello World!".
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API route handler to get the books from our book list
app.get("/getBooks", (req, res) => {
  res.status(200).json(booksList);
});

// API route handler to add a new book to our book list.
app.post("/addBook", (req, res) => {
  booksList.push({
    id: booksList.length,
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
  });
  console.log(`successfully added book "${req.body.name}" to book list!`);
  console.log("books list", booksList);

  res.status(200).send("Successfully added book to book list!");
});

app.post("/updateBook", (req, res) => {
  console.log("hit updatebook");

  const bookId = req.body.id;

  const bookIdx = booksList.findIndex((book) => book.id === bookId);

  if (bookIdx !== -1) {
    booksList[bookIdx] = {
      id: bookId,
      name: req.body.name,
      author: req.body.author,
      description: req.body.description,
    };
    console.log("updated book", booksList[bookIdx]);
    res.status(200).send("Successfully updated book in book list!");
  } else {
    res.status(404).send(`Cannot find book with id ${bookId}`);
  }
});

app.delete("/deleteBook/:id", (req, res) => {
  const bookId = Number(req.params.id);

  console.log("bookid", bookId);

  const bookIdx = booksList.findIndex((book) => book.id === bookId);

  if (bookIdx !== -1) {
    booksList.splice(bookIdx, 1);

    console.log("books list", booksList);

    res.status(200).send("Successfully deleted book from book list!");
  } else {
    res.status(404).send(`Cannot find book with id ${bookId}`);
  }
});

// establish connection cloud mongodb instance
mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true })
  // only start the server if the connection was successful
  .then(() => {
    console.log("connection to mongodb successful");

    // allow express to listen for incoming requests
    console.log(`express server ready for requests on port ${PORT}!`);
    app.listen(PORT);
  })
  // if the connection fails, terminate server
  .catch((err) => {
    console.log(err);
  });
