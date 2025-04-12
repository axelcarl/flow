import "./App.css";
import { TaskCard } from "./components/task";
import { useTaskStore } from "./stores/task";

function App() {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <div className="p-10">
      {tasks.map((task) => {
        return <TaskCard key={task.inception.toString()} task={task} />;
      })}
    </div>
  );
}

export default App;
