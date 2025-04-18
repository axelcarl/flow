import { DashboardRowProps } from "@/types/dashboard";
import { TaskCard } from "./task";
import { Task } from "@/types/task";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

export const DashboardRow = ({ tasks, status }: DashboardRowProps) => {
  const row = tasks.filter((task) => task.status === status).slice(0, 10);

  if (row.length < 1) {
    return null;
  }

  return (
    <div className="flex flex-col gap-5">
      <span className="font-bold">{getStatusTitle(status)}</span>
      <div>
        <Carousel>
          <CarouselContent>
            {row.map((task) => (
              <CarouselItem key={task.id} className="md:basis-1/2">
                <TaskCard task={task} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
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
