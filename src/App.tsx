import { useState } from "react";
import ToDo from "./components/ToDo";
import { nanoid } from "nanoid";

export type todo = {
  id: string;
  work: string;
};

export default function App() {
  const [todos, setToDos] = useState<todo[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  return (
    <div className="h-screen bg-gray-900 text-white flex flex-col items-center gap-10 px-[300px]">
      <div className="flex gap-5 w-full mx-auto mt-40">
        <input
          type="text"
          placeholder="What do you plan to do?"
          className="border-none px-8 py-2 text-gray-700 w-full rounded-md"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button
          className="w-fit px-5 py-2 bg-green-700 rounded-md font-bold"
          onClick={() => {
            setToDos((pastTodos) => [
              ...pastTodos,
              { id: nanoid(), work: newTask },
            ]);
            setNewTask("");
          }}
        >
          Add
        </button>
      </div>
      <div className="flex flex-col w-full gap-3">
        {todos.map(({ id, work }) => (
          <ToDo id={id} work={work} modifyToDos={setToDos} />
        ))}
      </div>
    </div>
  );
}
