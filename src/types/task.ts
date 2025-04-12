export interface Task {
  text: string;
  status: "open" | "pending" | "done";
  inception: Date;
  deadline: Date;
}

export interface TaskState {
  tasks: Task[];
  createTask: (task: Task) => void;
  alterStatus: (task: Task) => void;
}
