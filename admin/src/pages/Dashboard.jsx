import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow bg-gray-100">
        {location.pathname === "/" ? (
          <div className="flex items-center justify-center h-full">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome to Admin Panel
            </h1>
          </div>
        ) : (
          <Outlet />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
