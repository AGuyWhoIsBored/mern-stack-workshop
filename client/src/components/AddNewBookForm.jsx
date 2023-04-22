export default function AddNewBookForm(props) {
  return (
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
  );
}
