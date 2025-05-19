import { Outlet, useNavigate } from "react-router";
import logo from "@/assets/flow-logo.png";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Spotlight from "@/components/spotlight";

export const Header = () => {
  const navigate = useNavigate();

  const tableBg = window.location.pathname === "/table" ? "bg-blue-200" : "";
  const dashboardBg =
    window.location.pathname === "/dashboard" ? "bg-blue-200" : "";

  return (
    <>
      <Spotlight />
      <div className="w-full bg-slate-50 min-h-dvh">
        <div className="w-full flex bg-white p-4 fixed items-center shadow justify-between">
          <img
            className="h-7"
            src={logo}
            alt="Logotype"
            onClick={() => navigate("/")}
          />
          <div className="flex gap-2">
            <Button
              variant="link"
              className={cn(`font-bold ${dashboardBg}`)}
              onClick={() => navigate("/dashboard")}
            >
              dashboard
            </Button>
            <Button
              variant="link"
              className={cn(`font-bold ${tableBg}`)}
              onClick={() => navigate("/table")}
            >
              table
            </Button>
          </div>
        </div>
        <div className="h-10"></div>
        <Outlet />
      </div>
    </>
  );
};
