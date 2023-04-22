const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// define a new Schema for a book
const bookSchema = new Schema({
  id: {
    type: Number,
    required: true,
  },
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

// export this so other files can see it
module.exports = mongoose.model("Book", bookSchema);
