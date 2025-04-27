import { Task } from "@/types/task";
import { Column, ColumnDef } from "@tanstack/react-table";
import { Button } from "./ui/button";
import { ArrowUpDown } from "lucide-react";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "status",
    header: ({ column }) => (
      <SortableHeader header="Status" column={column} />
    ),

  },
  {
    accessorKey: "text",
    header: ({ column }) => (
      <SortableHeader header="Description" column={column} />
    ),
    cell: ({ row }) => (
      <div className="font-semibold">{row.getValue<string>("text")}</div>
    ),
  },
  {
    accessorKey: "deadline",
    header: ({ column }) => (
      <SortableHeader header="Deadline" column={column} />
    ),
    cell: ({ row }) => row.getValue<Date>("deadline").toLocaleDateString(),
  },
];

const SortableHeader = ({ header, column }: { header: string, column: Column<Task> }) => (
  <div className="flex items-center gap-2">
    {header}
    <Button variant="ghost"
      onClick={() => column.toggleSorting(
        column.getIsSorted() === "asc"
      )}
    >
      <ArrowUpDown />
    </Button>
  </div>
)
