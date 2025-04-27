import { columns } from "@/components/columns";
import { DataTable } from "@/components/data-table";
import { TaskForm } from "@/components/task-form";
import { useTaskStore } from "@/stores/task";

function Table() {
  const tasks = useTaskStore((state) => state.tasks);
  return (
    <div className="flex flex-col mt-14 px-2 gap-6">
      <TaskForm expandable />
      <DataTable columns={columns} data={tasks} />
    </div>
  );
}

export default Table;
