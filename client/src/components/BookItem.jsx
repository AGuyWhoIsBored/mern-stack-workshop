import { useState } from "react";

export default function BookItem(props) {
  const [name, setName] = useState(props.name ?? "No name");
  const [author, setAuthor] = useState(props.author ?? "No author");
  const [description, setDescription] = useState(
    props.description ?? "No description"
  );

  function handleTextChange(e, updateStateFn) {
    updateStateFn(e.target.value);
  }

  function handleSendUpdate() {
    props.updateBook(props.id, name, author, description);
  }

  function handleSendDelete() {
    props.deleteBook(props.id);
  }

  return (
    <div>
      <div className="bookInfo">
        <div>
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => handleTextChange(e, setName)}
            value={name}
          />
        </div>

        <div>
          <label>Author:</label>
          <input
            type="text"
            onChange={(e) => handleTextChange(e, setAuthor)}
            value={author}
          />
        </div>

        <div>
          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => handleTextChange(e, setDescription)}
            value={description}
          />
        </div>
      </div>

      <div className="buttonActions">
        <button type="button" className="btn" onClick={handleSendUpdate}>
          Update Book Info
        </button>

        <button type="button" className="btn" onClick={handleSendDelete}>
          Delete Book
        </button>
      </div>
    </div>
  );
}
