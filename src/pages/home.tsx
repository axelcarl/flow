import logo from "@/assets/flow-logo.png";
import tasks from "@/assets/tasks.png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-dvw flex justify-center">
      <div className="w-full flex bg-white p-4 fixed items-center justify-between">
        <img className="h-7" src={logo} alt="Logotype" />
        <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
      </div>
      <div className="px-3 py-25 max-w-dvw w-dvw flex">
        <div className="max-w-full bg-gradient-to-b from-blue-200 to-white rounded-4xl flex-1 flex flex-col items-center">
          <div className="flex mt-20 items-end">
            <img src={logo} alt="Logotype" className="h-7" />
            <span className=""> a task manager</span>
          </div>

          <div className="p-8 text-2xl sm:text-7xl font-thin flex flex-col text-center flex-wrap text-slate-800">
            <span>Task managing reimagined,</span>
            <span>Simplicity kept</span>
            <div className="text-lg sm:text-2xl font-thin max-w-[60vh] mt-2 text-slate-600">
              Instant action, made for productivity, multiview support, logical
              workflows, creative planning, steamlined pipelines
            </div>
          </div>

          <div className="flex">
            <Button onClick={() => navigate("/dashboard")}>Start today</Button>
          </div>

          <div className="flex mt-10">
            <img src={tasks} alt="Tasks" className="blur-xs w-[80dvw]" />
          </div>
        </div>
      </div>
    </div>
  );
};
