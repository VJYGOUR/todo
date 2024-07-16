import { useEffect, useState } from "react";
import { db } from "./appwrite/database";

import Header from "./components/Header";
import Main from "./components/Main";

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
      <Main notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;
