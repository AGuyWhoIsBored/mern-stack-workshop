import "./App.css";
import { useEffect, useState } from "react";
import BookListContainer from "./components/BookListContainer";
import NewBookContainer from "./components/NewBookContainer";

function App() {
  const [books, setBooks] = useState([]);

  // fetch books on page load
  useEffect(() => {
    async function fetchBooks() {
      const res = await fetch("http://localhost:3333/getBooks");

      if (res.status === 200) {
        const booksJson = await res.json();

        console.log("booksjson", booksJson);

        setBooks(booksJson);
      }
    }

    fetchBooks();
  }, []);

  async function addNewBook(name, author, description) {
    const newBook = {
      name,
      author,
      description,
    };

    // post new book to server
    const res = await fetch("http://localhost:3333/addBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    if (res.status === 200) {
      const id = await res.json();
      setBooks([
        ...books,
        {
          id: id.id,
          name,
          author,
          description,
        },
      ]);
    }
  }

  async function updateBook(id, name, author, description) {
    const newBook = {
      id,
      name,
      author,
      description,
    };

    // post updates to server
    const res = await fetch("http://localhost:3333/updateBook", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    });

    // update books if successful update
    if (res.status === 200) {
      const newBookArr = books;
      const updateBookIdx = newBookArr.findIndex((book) => book.id === id);
      newBookArr[updateBookIdx] = newBook;
      setBooks(newBookArr);
    }
  }

  return (
    <div className="appContainer">
      <h1>Book List Thingy!</h1>
      <NewBookContainer addNewBook={addNewBook} />
      <BookListContainer books={books} updateBook={updateBook} />
    </div>
  );
}

export default App;
