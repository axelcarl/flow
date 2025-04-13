import { Task, TaskState } from "@/types/task";
import { create } from "zustand";

const mock = [
  {
    text: "Clean apartment",
    status: "open" as Task["status"],
    inception: new Date("2025-04-10"),
    deadline: new Date("2025-04-15"),
  },
  {
    text: "Shop food",
    status: "open" as Task["status"],
    inception: new Date("2025-04-09"),
    deadline: new Date("2025-04-15"),
  },
  {
    text: "Buy new shoes",
    status: "open" as Task["status"],
    inception: new Date("2025-04-08"),
    deadline: new Date("2025-04-14"),
  },
  {
    text: "Get new toothbrush",
    status: "open" as Task["status"],
    inception: new Date("2025-04-06"),
    deadline: new Date("2025-04-14"),
  },
  {
    text: "Complete dashboard",
    status: "open" as Task["status"],
    inception: new Date("2025-04-06"),
    deadline: new Date("2025-04-14"),
  },
  {
    text: "Create flow logotype",
    status: "open" as Task["status"],
    inception: new Date("2025-04-06"),
    deadline: new Date("2025-04-14"),
  },
];

export const useTaskStore = create<TaskState>((set) => ({
  tasks: [...mock],
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
