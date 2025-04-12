import "./App.css";
import { useTaskStore } from "./stores/task";

function App() {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <div className="p-2 font-bold">
      {tasks.map((task) => {
        return <div>{task.text}</div>;
      })}
    </div>
  );
}

export default App;
