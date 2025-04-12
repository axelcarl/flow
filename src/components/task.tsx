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
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle className="flex justify-between">
          {task.text}
          <div className="cursor-pointer" onClick={() => alterStatus(task)}>
            {statusIcon(task.status)}
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <div className="">Due in: {deadline} days.</div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-gray-500">
          Created at: {task.inception.toLocaleString()}
        </div>
      </CardFooter>
    </Card>
  );
};

const statusIcon = (status: string) => {
  switch (status) {
    case "open":
      return <Circle />;
    case "pending":
      return <CirclePlay />;
    case "done":
      return <CheckCircle2 />;
  }
};
