import { z } from "zod";

export const TaskSchema = z.object({
  id: z.number(),
  text: z.string().min(3, "Task description is required."),
  status: z.enum(["open", "pending", "done"]),
  inception: z.date(),
  deadline: z.date().refine((date) => date > new Date(), {
    message: "Deadline must be set in the future.",
  }),
});

export type Task = z.infer<typeof TaskSchema>;

export interface TaskState {
  tasks: Task[];
  addMockTasks: () => void;
  logTasks: () => void;
  createTask: (task: Task) => void;
  alterStatus: (task: Task) => void;
}
