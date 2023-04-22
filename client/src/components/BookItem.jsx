import { useEffect, useState } from "react";

export default function BookItem(props) {
  const [name, setName] = useState(props.name);
  const [author, setAuthor] = useState(props.author);
  const [description, setDescription] = useState(props.description);

  const [updateBtnState, setUpdateBtnState] = useState(false);

  useEffect(() => {
    const newNameValid = name !== props.name;
    const newAuthorValid = author !== props.author;
    const newDescriptionValid = description !== props.description;

    const fieldsValid =
      name.length > 0 && author.length > 0 && description.length > 0;

    setUpdateBtnState(
      (newNameValid || newAuthorValid || newDescriptionValid) && fieldsValid
    );
  }, [name, author, description, props.name, props.author, props.description]);

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
    <div className="bookItem">
      <div>
        <div className="inputGroup">
          <label>Name:</label>
          <input
            type="text"
            onChange={(e) => handleTextChange(e, setName)}
            value={name}
          />
        </div>

        <div className="inputGroup">
          <label>Author:</label>
          <input
            type="text"
            onChange={(e) => handleTextChange(e, setAuthor)}
            value={author}
          />
        </div>

        <div className="inputGroup">
          <label>Description:</label>
          <input
            type="text"
            onChange={(e) => handleTextChange(e, setDescription)}
            value={description}
          />
        </div>
      </div>

      <div className="buttonGroup">
        <button
          type="button"
          disabled={!updateBtnState}
          onClick={handleSendUpdate}
        >
          Update Book Info
        </button>

        <button type="button" onClick={handleSendDelete}>
          Delete Book
        </button>
      </div>
    </div>
  );
}
