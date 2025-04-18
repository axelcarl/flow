import { Outlet } from "react-router";
import logo from "@/assets/flow-logo.png";

export const Header = () => {
  return (
    <div className="w-full bg-slate-50 min-h-dvh">
      <div className="w-full flex bg-white p-4 fixed items-center shadow">
        <img className="h-7" src={logo} alt="Logotype" />
      </div>
      <div className="h-10"></div>
      <Outlet />
    </div>
  );
};
