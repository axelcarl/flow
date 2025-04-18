import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { useTaskStore } from "@/stores/task";

function Table() {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <div className="flex flex-col p-14 gap-10">
      <DataTable columns={columns} data={tasks} />
    </div>
  );
}

export default Table;
