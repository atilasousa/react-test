import { useState } from "react";
import "./App.css";
// import reactLogo from './assets/react.svg'
import TaskInput from "./components/TaskInput/TaskInput";
import Task from "./components/task/Task";

function App() {
  const [tasks, setTasks] = useState(Array<string>);

  const getTask = (task: string) => {
    setTasks([...tasks, task]);
  };

  return (
    <div className="App">
      <TaskInput getTask={getTask} />
      <div className="tasks-list">
        {tasks.map((el) => (
          <Task title={el} />
        ))}
      </div>
    </div>
  );
}

export default App;
