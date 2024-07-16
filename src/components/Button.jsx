import { db } from "../appwrite/database";

function Button({ noteId, setNotes }) {
  const handleDelete = () => {
    const deleteData = async () => {
      await db.notes.delete(noteId);
      setNotes((prevState) => prevState.filter((curr) => curr.$id !== noteId));
    };
    deleteData();
  };
  return (
    <button onClick={handleDelete}>
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fillRule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </button>
  );
}

export default Button;
