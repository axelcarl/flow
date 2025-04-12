import { create } from "zustand";

interface Task {
  text: string;
  status: "open" | "pending" | "done";
  inception: Date;
  deadline: Date;
}

interface TaskState {
  tasks: Task[];
  createTask: (task: Task) => void;
}

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    {
      text: "Test",
      status: "open",
      inception: new Date(),
      deadline: new Date(),
    },
  ],
  createTask: (task: Task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
}));
