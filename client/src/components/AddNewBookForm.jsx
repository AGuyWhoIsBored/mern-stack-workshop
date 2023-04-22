import { useState } from "react";

export default function AddNewBookForm(props) {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");

  function handleTextChange(e, updateStateFn) {
    updateStateFn(e.target.value);
  }

  return (
    <form>
      <div>
        <label htmlFor="newBookNameInput">Name</label>
        <input
          type="text"
          id="newBookNameInput"
          onChange={(e) => handleTextChange(e, setName)}
          value={name}
        />
      </div>

      <div>
        <label htmlFor="newBookAuthor">Author</label>
        <input
          type="text"
          id="newBookAuthor"
          onChange={(e) => handleTextChange(e, setAuthor)}
          value={author}
        />
      </div>

      <div>
        <label htmlFor="newBookDescription">Description</label>
        <input
          type="text"
          id="newBookDescription"
          onChange={(e) => handleTextChange(e, setDescription)}
          value={description}
        />
      </div>

      <button type="submit">Add Book</button>
    </form>
  );
}
