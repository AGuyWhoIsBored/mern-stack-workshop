export default function BookItem(props) {
  return (
    <li>
      <div class="bookInfo">
        <p>
          <b>Name:</b> {props.name ?? "No name"}
        </p>
        <p>
          <b>Author:</b> {props.author ?? "No author"}
        </p>
        <p>
          <b>Description:</b> {props.description ?? "No description"}
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
  );
}
