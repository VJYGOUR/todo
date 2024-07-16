import { db } from "./appwrite/database";

function CreateNote({ setNotes }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = e.target.body.value;
    const payload = { body: userData };
    const createData = async () => {
      const res = await db.notes.create(payload);
      setNotes((prevState) => [...prevState, res]);
    };
    createData();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="body" placeholder="type here ...." />
    </form>
  );
}

export default CreateNote;
