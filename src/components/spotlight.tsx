import { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { useTaskStore } from "@/stores/task";
import { useShallow } from "zustand/react/shallow";

const Spotlight = () => {
  const { addMockTasks, logTasks } = useTaskStore(
    useShallow((state) => ({
      addMockTasks: state.addMockTasks,
      logTasks: state.logTasks,
    })),
  );
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", keydown);
    return () => document.removeEventListener("keydown", keydown);
  }, []);

  const select = (fn: () => void) => {
    setOpen(false);
    fn();
  };

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput
        placeholder="Type a command or search..."
        onBlur={() => setOpen(false)}
      />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Commands">
          <CommandItem onSelect={() => select(addMockTasks)}>
            Add mock tasks
          </CommandItem>
          <CommandItem onSelect={() => select(logTasks)}>Log tasks</CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};

export default Spotlight;
