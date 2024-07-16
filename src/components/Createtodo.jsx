import { db } from "../appwrite/database";

function Createtodo({ setNotes }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = e.target.body.value;
    const payload = { body: userData };
    const createData = async () => {
      const res = await db.notes.create(payload);
      setNotes((prevState) => [...prevState, res]);
    };
    createData();
    e.target.body.value = "";
  };
  return (
    <div className=" bg-white h-10">
      <form onSubmit={handleSubmit} className="w-full flex gap-6 h-full">
        <input
          name="body"
          type="text"
          placeholder="create a new todo"
          className="w-full h-full"
        />
        <button
          type="submit"
          className="inline-block border order-[-1] rounded-full w-12 border-[#9495A5]"
        ></button>
      </form>
    </div>
  );
}

export default Createtodo;