import { Dispatch, SetStateAction, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBinLine } from "react-icons/ri";
import { todo } from "../App";

type ToDoProps = todo & {
  modifyToDos: Dispatch<SetStateAction<todo[]>>;
};

export default function ToDo({ id, work, modifyToDos }: ToDoProps) {
  const [editable, setEditable] = useState<boolean>(false);

  return (
    <div
      key={id}
      className="border-4 border-violet-500 rounded-md px-3 py-2 flex gap-5"
    >
      <input
        type="text"
        className="bg-transparent w-full"
        readOnly={!editable}
        onChange={(e) =>
          modifyToDos((pastToDos) =>
            pastToDos.map((todo) =>
              todo.id === id ? { ...todo, work: e.target.value } : todo
            )
          )
        }
        value={work}
      />
      <div
        className="text-gray-200 flex justify-center items-center text-xl cursor-pointer"
        onClick={() => setEditable(!editable)}
      >
        {editable ? (
          <button className="bg-green-500 text-sm text-white font-bold rounded px-4 h-full flex items-center">
            Save
          </button>
        ) : (
          <CiEdit />
        )}
      </div>
      <div
        className="text-red-500 flex justify-center items-center text-xl cursor-pointer"
        onClick={() =>
          modifyToDos((pastToDos) =>
            pastToDos.filter(({ id: currentId }) => id !== currentId)
          )
        }
      >
        <RiDeleteBinLine />
      </div>
    </div>
  );
}
