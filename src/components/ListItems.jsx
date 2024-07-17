import { useState } from "react";
import DeleteButton from "./DeleteButton";

function ListItems({ noteId, setNotes, note, i }) {
  const [check, setCheck] = useState(false);
  const handleList = (i) => {
    setCheck(true);
  };
  return (
    <div className="relative">
      <main
        onClick={(i) => handleList(i)}
        className="absolute left-[-22px] top-[10px] hover:cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="12">
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      </main>
      <ol className={`${check ? "list-image-done" : "list-image-checkmark"} `}>
        <li className="">
          <section className="flex justify-between border-b-[2px] px-4 py-2 bg-white">
            {check ? (
              <s className="opacity-[.5]">{note.body}</s>
            ) : (
              <div>{note.body}</div>
            )}

            <DeleteButton noteId={noteId} setNotes={setNotes} />
          </section>
        </li>
      </ol>
    </div>
  );
}

export default ListItems;
