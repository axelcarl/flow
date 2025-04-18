import { Task } from "@/types/task";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Task>[] = [
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "text",
    header: () => <div className="font-semibold">Description</div>,
    cell: ({ row }) => (
      <div className="font-semibold">{row.getValue<string>("text")}</div>
    ),
  },
  {
    accessorKey: "deadline",
    header: "Deadline",
    cell: ({ row }) => row.getValue<Date>("deadline").toLocaleString(),
  },
];
