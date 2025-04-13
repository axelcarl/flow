import { Outlet } from "react-router";

export const Header = () => {
  return (
    <div className="w-full bg-slate-50 min-h-dvh">
      <div className="w-full flex bg-white shadow px-4 fixed h-12 items-center">
        <img className="h-5" src="src/assets/flow-logo.png" alt="Logotype" />
      </div>
      <div className="h-10"></div>
      <Outlet />
    </div>
  );
};
