import React, { useState } from "react";
import {
  Home,
  AlertTriangle,
  Map,
  BarChart2,
  Settings,
  Menu,
  FileText,
  Users,
  CarFront,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const sideBarContents = [
  { name: "Home", icon: <Home />, path: "/" },
  { name: "Report Incident", icon: <AlertTriangle />, path: "/report" },
  { name: "Live Map", icon: <Map />, path: "/map" },
  // { name: "Traffic Analytics", icon: <BarChart2 />, path: "/analytics" },
  { name: "My Reports", icon: <FileText />, path: "/my-reports" },
  // { name: "Public Transport", icon: <CarFront />, path: "/transport" },
  // { name: "Community", icon: <Users />, path: "/community" },
  { name: "Settings", icon: <Settings />, path: "/settings" },
];

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();
  const handleSelect = () => {
    if (isMobile) {
      setIsMobile(false);
    }
  };
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <>
      <button
        className="fixed left-4 top-4 z-50 block lg:hidden"
        onClick={() => setIsMobile(!isMobile)}
      >
        <Menu className="text-blue-600" />
      </button>

      <div
        className={`fixed inset-y-0 left-0 z-40 flex h-full w-64 flex-col bg-white px-6 py-2 shadow-lg transition-transform duration-300 
        ${isMobile ? "translate-x-0" : "-translate-x-full"} lg:relative lg:translate-x-0`}
      >
        {/* Logo */}
        <div className="mt-4 flex items-center gap-3 p-4">
          <CarFront className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-xl font-bold text-blue-600">AASA</h1>
            <p className="text-[10px] text-gray-500">Report Traffic Problems</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex-1">
          <ul className="space-y-4">
            {sideBarContents.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>
                  <button
                    onClick={() => handleSelect()}
                    className={`w-full rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200
                    flex items-center gap-3
                    ${
                      location === item.path
                        ? "bg-blue-50 text-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    {React.cloneElement(item.icon, {
                      size: 18,
                      className: location === item.path ? "text-blue-600" : "text-gray-500",
                    })}
                    {item.name}
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
              <Users size={20} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-700">{user.username}</p>
              <p className="text-xs text-gray-500">Community Reporter</p>
            </div>
          </div>
        </div>
      </div>

      {isMobile && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setIsMobile(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
