import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/SideBar";

const MainLayout = () => {
  return (
    <div className="container min-h-screen w-full h-full min-w-[100%] flex lg:gap-60">
      <div className="sidebar mr-6 lg:mr-16">
        <Sidebar />
      </div>
      <div className="main-content relative mr-1 mt-10 flex flex-1 flex-col gap-8 lg:mr-6">
        <Outlet />
      </div>
    </div>
  );
}; 

export default MainLayout;
