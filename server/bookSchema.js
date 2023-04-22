const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// define a new Schema for a book
const bookSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// create a new object model using this schema
// and export it so other files can see it
module.exports = mongoose.model("Book", bookSchema);
