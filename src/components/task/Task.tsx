import { useState } from "react";
import "./task.scss";

export default function Task(props: { title: string }): any {
  const [state, setState] = useState(false);

  return (
    <div className={`task ${state ? "task-done" : null}`}>
      <input type="checkbox" onChange={(e) => setState(e.target.checked)} />
      <span>{props.title}</span>
    </div>
  );
}
