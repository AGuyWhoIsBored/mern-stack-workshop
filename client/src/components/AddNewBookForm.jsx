import { useEffect, useState } from "react";

export default function AddNewBookForm(props) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  const [addBtnState, setAddBtnState] = useState(false);

  useEffect(() => {
    setAddBtnState(name.length && author.length && description.length);
  }, [name, author, description]);

  function handleTextChange(e, updateStateFn) {
    updateStateFn(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    props.addNewBook(name, author, description);

    setName("");
    setAuthor("");
    setDescription("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputGroup">
        <label htmlFor="newBookNameInput">Name</label>
        <input
          type="text"
          id="newBookNameInput"
          onChange={(e) => handleTextChange(e, setName)}
          value={name}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="newBookAuthor">Author</label>
        <input
          type="text"
          id="newBookAuthor"
          onChange={(e) => handleTextChange(e, setAuthor)}
          value={author}
        />
      </div>

      <div className="inputGroup">
        <label htmlFor="newBookDescription">Description</label>
        <input
          type="text"
          id="newBookDescription"
          onChange={(e) => handleTextChange(e, setDescription)}
          value={description}
        />
      </div>

      <div className="buttonGroup">
        <button type="submit" disabled={!addBtnState}>
          Add Book
        </button>
      </div>
    </form>
  );
}
