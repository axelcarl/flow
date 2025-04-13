import { DashboardRow } from "@/components/dashboard-row";
import { TaskCard } from "@/components/task";
import { TaskForm } from "@/components/task-form";
import { useTaskStore } from "@/stores/task";

function Dashboard() {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <div className="flex flex-col p-10 gap-10">
      <div className="flex gap-5 flex-wrap @container">
        <TaskForm />
        <div className="flex flex-col gap-5 max-w-full">
          <span className="font-bold">Recent tasks:</span>
          <div className="flex overflow-x-auto gap-5 @[720px]:flex-col">
            {tasks.slice(0, 3).map((task) => {
              return <TaskCard key={task.inception.toString()} task={task} />;
            })}
          </div>
        </div>
      </div>
      <DashboardRow tasks={tasks} status="pending" />
      <DashboardRow tasks={tasks} status="open" />
      <DashboardRow tasks={tasks} status="done" />
    </div>
  );
}

export default Dashboard;
