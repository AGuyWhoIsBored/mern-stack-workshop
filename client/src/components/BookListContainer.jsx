import BookItem from "./BookItem";

export default function BookListContainer() {
  return (
    <div className="bookListContainer">
      <h2>List of Books</h2>

      <ul>
        <BookItem name="book 1" author="dookan" description="desc 1" />
        <BookItem name="book 2" author="dookan" description="another desc" />
        <BookItem name="book 3" author="dookan" description="desc 2!" />
      </ul>
    </div>
  );
}
