import BookItem from "./BookItem";

export default function BookListContainer(props) {
  const booksList = props.books?.map((book) => (
    <li key={book.id}>
      <BookItem
        id={book.id}
        name={book.name}
        author={book.author}
        description={book.description}
        updateBook={props.updateBook}
        deleteBook={props.deleteBook}
      />
    </li>
  ));

  return (
    <div id="bookListContainer">
      <h2>List of Books</h2>

      {booksList && booksList.length > 0 ? (
        <ul>{booksList}</ul>
      ) : (
        <p>No books yet!</p>
      )}
    </div>
  );
}
