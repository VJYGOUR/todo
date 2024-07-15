import { db } from "./appwrite/database";

function Button({ noteId, setNotes }) {
  const handleDelete = () => {
    const deleteData = async () => {
      await db.notes.delete(noteId);
      setNotes((prevState) => prevState.filter((curr) => curr.$id !== noteId));
    };
    deleteData();
  };
  return <button onClick={handleDelete}>remove</button>;
}

export default Button;
