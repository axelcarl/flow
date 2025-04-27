import { DashboardRow } from "@/components/dashboard-row";
import { TaskCard } from "@/components/task";
import { TaskForm } from "@/components/task-form";
import { useTaskStore } from "@/stores/task";

function Dashboard() {
  const tasks = useTaskStore((state) => state.tasks)
    .sort((a, b) => b.id - a.id)
    .slice(0, 3);

  return (
    <div className="flex flex-col p-14 gap-10">
      <div className="flex gap-5 flex-wrap">
        <TaskForm expandable={false} />
        <div className="flex flex-col gap-5 max-w-full flex-1">
          <span className="font-bold">Recent tasks:</span>
          <div className="flex gap-5 flex-col flex-1">
            {tasks.map((task) => {
              return <TaskCard key={task.id} task={task} />;
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
