import "./App.css";
import { TaskCard } from "./components/task";
import { TaskForm } from "./components/task-form";
import { useTaskStore } from "./stores/task";

function App() {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <div className="p-10 flex flex-col gap-5">
      <TaskForm />
      {tasks.map((task) => {
        return <TaskCard key={task.inception.toString()} task={task} />;
      })}
    </div>
  );
}

export default App;
