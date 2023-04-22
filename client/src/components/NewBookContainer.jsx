import AddNewBookForm from "./AddNewBookForm";

export default function NewBookContainer(props) {
  return (
    <div className="newBookContainer">
      <h2>Add a New Book</h2>
      <AddNewBookForm addNewBook={props.addNewBook} />
    </div>
  );
}
