import { useState, useRef } from "react";
import "./TaskInput.scss";

export default function TaskInput({ getTask }: any) {
  const [task, setTask] = useState("");
  const ref = useRef(null);

  const handleClick = (task: string) => {
    getTask(task);
    setTask("");
  };

  return (
    <div className="taskInput">
      <input
        type="text"
        placeholder="Tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={(e) => handleClick(task)}>Add</button>
    </div>
  );
}
