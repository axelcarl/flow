import { Task, TaskState } from "@/types/task";
import { create } from "zustand";

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [
    {
      text: "Test",
      status: "open",
      inception: new Date("2025-04-10"),
      deadline: new Date("2025-04-15"),
    },
  ],
  createTask: (task: Task) =>
    set((state) => ({ tasks: [...state.tasks, task] })),
  alterStatus: (task: Task) =>
    set((state) => {
      const tasks = [...state.tasks];
      const index = tasks.findIndex(
        (item) => item.inception === task.inception,
      );

      tasks[index].status = alterStatus(task.status);
      return { tasks };
    }),
}));

const alterStatus = (status: string) => {
  switch (status) {
    case "open":
      return "pending";
    case "pending":
      return "done";
    case "done":
      return "open";
    default:
      return "open";
  }
};
