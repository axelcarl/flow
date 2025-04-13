import { DashboardRowProps } from "@/types/dashboard";
import { TaskCard } from "./task";
import { Task } from "@/types/task";

export const DashboardRow = ({ tasks, status }: DashboardRowProps) => {
  const row = tasks.filter((task) => task.status === status).slice(0, 10);

  if (row.length < 1) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5">
      <span className="font-bold">{getStatusTitle(status)}</span>
      <div className="flex gap-5 overflow-x-auto scroll-smooth">
        {row
          .filter((task) => task.status === status)
          .slice(0, 10)
          .map((task) => (
            <TaskCard key={task.inception.toString()} task={task} />
          ))}
      </div>
    </div>
  );
};

const getStatusTitle = (status: Task["status"]) => {
  switch (status) {
    case "open":
      return "Upcoming tasks:";
    case "pending":
      return "Current tasks:";
    case "done":
      return "Completed tasks:";
  }
};
