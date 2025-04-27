import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Task, TaskSchema } from "@/types/task";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ChevronDown, CalendarIcon, ChevronUp } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader } from "./ui/card";
import { useTaskStore } from "@/stores/task";
import { useState } from "react";

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(today.getDate() + 1);

export function TaskForm({ expandable }: { expandable: boolean }) {
  const [expanded, setExpanded] = useState(!expandable);
  const createTask = useTaskStore((state) => state.createTask);
  const form = useForm<Task>({
    resolver: zodResolver(TaskSchema),
    defaultValues: {
      id: 1,
      text: "",
      status: "open",
      inception: today,
      deadline: tomorrow,
    },
  });

  function onSubmit(values: Task) {
    values.inception = new Date();
    values.id = values.inception.getTime();
    createTask(values);
  }

  return (
    <Card
      className={cn(expanded ? "flex-1" : "flex-0 gap-0 py-6 justify-center")}
    >
      <CardHeader className="font-bold">
        <div className="flex justify-between items-center">
          Create New Task{" "}
          {expandable ? (
            <Button variant={"ghost"} onClick={() => setExpanded(!expanded)}>
              {expanded ? <ChevronUp /> : <ChevronDown />}
            </Button>
          ) : null}
        </div>
      </CardHeader>
      <CardContent
        className={cn(
          "transition-[max-height] duration-200",
          expanded ? "max-h-[1000px]" : "max-h-0 overflow-hidden",
        )}
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="text"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Task Description</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter task description" {...field} />
                  </FormControl>
                  <FormDescription>
                    Describe what needs to be done
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="status"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Status</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select task status" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="done">Done</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Current status of the task</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="deadline"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Deadline</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={(date) => field.onChange(date)}
                        initialFocus
                        disabled={(date: Date) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormDescription>
                    When the task needs to be completed
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
