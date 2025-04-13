import { Task } from "./task";

export interface DashboardRowProps {
  tasks: Task[];
  status: Task["status"];
}
