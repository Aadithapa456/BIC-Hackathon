import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./components/SideBar";
import Report from "./Pages/Report";
import LiveMap from "./Pages/LiveMap";

function App() {
  return (
    <div className="container min-h-screen w-full h-full">
      <div className="flex flex-1 h-full w-full">
        <div className="sidebar mr-6 lg:mr-16">
          <Sidebar />
        </div>
        <div className="main-content relative mr-1 mt-10 flex flex-1 flex-col gap-8 lg:mr-6">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/report" element={<Report />}></Route>
            <Route path="/map" element={<LiveMap />}></Route>
            <Route path="/home" element={<Home />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
