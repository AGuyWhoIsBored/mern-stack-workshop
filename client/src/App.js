import "./App.css";
import { useState } from "react";
import BookListContainer from "./components/BookListContainer";
import NewBookContainer from "./components/NewBookContainer";

const DEFAULT_BOOKS = [
  {
    name: "book 1",
    author: "dookan",
    description: "my first book",
  },
  {
    name: "book 2",
    author: "still dookan",
    description: "my second book",
  },
  {
    name: "book 3",
    author: "not dookan",
    description: "my third book",
  },
];

function App() {
  const [books, setBooks] = useState([]);

  function addNewBook(name, author, description) {
    setBooks([
      ...books,
      {
        name,
        author,
        description,
      },
    ]);
  }

  return (
    <div className="appContainer">
      <h1>Book List Thingy!</h1>
      <NewBookContainer addNewBook={addNewBook} />
      <BookListContainer books={books} />
    </div>
  );
}

export default App;
