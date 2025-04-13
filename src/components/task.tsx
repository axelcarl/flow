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
    <Card className="min-w-[300px]">
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
        <div className=" flex text-sm text-gray-500 justify-end w-full">
          {task.inception.toLocaleDateString()}
        </div>
      </CardFooter>
    </Card>
  );
};

const statusIcon = (status: string) => {
  switch (status) {
    case "open":
      return <Circle className="text-blue-500" />;
    case "pending":
      return <CirclePlay className="text-yellow-500" />;
    case "done":
      return <CheckCircle2 className="text-green-500" />;
  }
};
