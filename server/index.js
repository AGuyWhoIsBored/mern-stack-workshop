// load the express module
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// load the Book model
const Book = require("./bookSchema");

// initialize a new express application
const app = express();

// Loading the environment variables from the .env file.
require("dotenv").config();

// configure server settings

// set the server listening port
const PORT = process.env.PORT || 5555;
const MONGODB_URI = process.env.MONGODB_CONNECTION_URI;

// middlewares

// Telling the application to use the express.json() middleware. This middleware will parse the body of
// any request that has a Content-Type of application/json.
app.use(express.json());

// allow frontend to connect to backend on a different domain
app.use(cors());

// This is a route handler. It is listening for a GET request to the root route of the application.
// When it receives a request, it will send back a response with the string "Hello World!".
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API route handler to get the books from our book list
app.get("/getBooks", async (req, res) => {
  const books = await Book.find();
  res.status(200).json(
    books.map((book) => {
      return {
        id: book._id,
        name: book.name,
        author: book.author,
        description: book.description,
      };
    })
  );
});

// API route handler to add a new book to our book list.
app.post("/addBook", async (req, res) => {
  // create new Book object
  const newBook = new Book({
    name: req.body.name,
    author: req.body.author,
    description: req.body.description,
  });

  // persist it to database using mongoose
  // need to do this asynchronously since it takes time for database to persist this
  await newBook.save();

  console.log(`successfully added book "${req.body.name}" to book list!`);
  res.status(200).json({ id: newBook._id });
});

app.post("/updateBook", async (req, res) => {
  const bookId = req.body.id;

  try {
    const book = await Book.findById(bookId);
    book.name = req.body.name;
    book.author = req.body.author;
    book.description = req.body.description;
    await book.save();

    res.status(200).send("Successfully updated book in book list!");
  } catch (error) {
    res.status(500).send(`Failed to update book: ${error.message}`);
  }
});

app.delete("/deleteBook/:id", async (req, res) => {
  const bookId = req.params.id;

  try {
    await Book.findByIdAndDelete(bookId);

    res.status(200).send("Successfully deleted book from book list!");
  } catch (error) {
    res.status(404).send(`Failed to delete book: ${error.message}`);
  }
});

// establish connection cloud mongodb instance
console.log("start connection");
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
