import { Task } from "@/types/task";
import { CheckCircle2, Circle, CirclePlay } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { useTaskStore } from "@/stores/task";

export const TaskCard = ({ task }: { task: Task }) => {
  const alterStatus = useTaskStore((state) => state.alterStatus);
  const deadline = Math.round(
    new Date(task.deadline.getTime() - new Date().getTime()).getTime() /
    1000 /
    3600 /
    24,
  );

  return (
    <Card className="min-w-[275px]">
      <CardHeader>
        <CardTitle className="flex justify-between">
          {task.text}
          <div
            className="hover:bg-slate-100 border-slate-200 border-1 cursor-pointer flex gap-2 font-medium py-1 px-2 rounded-full bg-zinc-50 justify-around items-center text-sm"
            onClick={() => alterStatus(task)}
          >
            {statusIcon(task.status)}
            {task.status}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="">Due in: {deadline} days.</div>
        </div>
      </CardContent>
      <CardFooter>
        <div className=" flex text-sm text-slate-500 justify-end w-full">
          {task.inception.toLocaleDateString()}
        </div>
      </CardFooter>
    </Card>
  );
};

const statusIcon = (status: string) => {
  switch (status) {
    case "open":
      return <Circle className="size-4 text-blue-500" />;
    case "pending":
      return <CirclePlay className="size-4 text-yellow-500" />;
    case "done":
      return <CheckCircle2 className="size-4 text-green-500" />;
  }
};
