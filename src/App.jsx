import { useEffect, useState } from "react";
import { db } from "./appwrite/database";
import CreateNote from "./CreateNote";
import Button from "./Button";
import Header from "./Header";

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const init = async () => {
      const response = await db.notes.list();
      setNotes(response.documents);
    };

    init();
  }, []);
  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
