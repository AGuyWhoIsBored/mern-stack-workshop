import BookItem from "./BookItem";

export default function BookListContainer(props) {
  const booksList = props.books?.map((book) => (
    <BookItem
      name={book.name}
      author={book.author}
      description={book.description}
    />
  ));

  return (
    <div className="bookListContainer">
      <h2>List of Books</h2>

      {booksList ? <ul>{booksList}</ul> : <p>No books yet!</p>}
    </div>
  );
}
