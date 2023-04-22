import "./App.css";

function App(props) {
  return (
    <div className="appContainer">
      <h1>Book List Thingy!</h1>

      <div className="newBookContainer">
        <h2>Add a New Book</h2>
        <form>
          <div>
            <label htmlFor="newBookNameInput">Name</label>
            <input type="text" id="newBookNameInput" />
          </div>

          <div>
            <label htmlFor="newBookAuthor">Author</label>
            <input type="text" id="newBookAuthor" />
          </div>

          <div>
            <label htmlFor="newBookDescription">Description</label>
            <input type="text" id="newBookDescription" />
          </div>

          <button type="submit">Add Book</button>
        </form>
      </div>

      <div className="bookListContainer">
        <h2>List of Books</h2>

        <ul>
          <li>
            <div class="bookInfo">
              <p>
                <b>Name:</b> hello!
              </p>
              <p>
                <b>Author:</b> dookan
              </p>
              <p>
                <b>Description:</b> this is quite the book
              </p>
            </div>

            <div class="buttonActions">
              <button type="button" className="btn">
                Edit Book Info
              </button>

              <button type="button" className="btn">
                Delete Book
              </button>
            </div>
          </li>

          <li>
            <div class="bookInfo">
              <p>
                <b>Name:</b> hello!
              </p>
              <p>
                <b>Author:</b> dookan
              </p>
              <p>
                <b>Description:</b> this is quite the book
              </p>
            </div>

            <div class="buttonActions">
              <button type="button" className="btn">
                Edit Book Info
              </button>

              <button type="button" className="btn">
                Delete Book
              </button>
            </div>
          </li>

          <li>
            <div class="bookInfo">
              <p>
                <b>Name:</b> hello!
              </p>
              <p>
                <b>Author:</b> dookan
              </p>
              <p>
                <b>Description:</b> this is quite the book
              </p>
            </div>

            <div class="buttonActions">
              <button type="button" className="btn">
                Edit Book Info
              </button>

              <button type="button" className="btn">
                Delete Book
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
