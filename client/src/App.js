import "./App.css";
import BookListContainer from "./components/BookListContainer";
import NewBookContainer from "./components/NewBookContainer";

function App() {
  return (
    <div className="appContainer">
      <h1>Book List Thingy!</h1>
      <NewBookContainer />
      <BookListContainer />
    </div>
  );
}

export default App;
