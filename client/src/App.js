import "./App.css";
import BookItem from "./components/BookItem";
import AddNewBookForm from "./components/AddNewBookForm";

function App() {
  return (
    <div className="appContainer">
      <h1>Book List Thingy!</h1>

      <div className="newBookContainer">
        <h2>Add a New Book</h2>
        <AddNewBookForm />
      </div>

      <div className="bookListContainer">
        <h2>List of Books</h2>

        <ul>
          <BookItem name="book 1" author="dookan" description="desc 1" />
          <BookItem name="book 2" author="dookan" description="another desc" />
          <BookItem name="book 3" author="dookan" description="desc 2!" />
        </ul>
      </div>
    </div>
  );
}

export default App;
