import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Report from "./Pages/Report";
import LiveMap from "./Pages/LiveMap";
import Login from "./Pages/Login";
import MainLayout from "./MainLayout";
import NotFound from "./Pages/NotFound";
import MyReports from "./Pages/MyReport";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/report" element={<Report />} />
        <Route path="/map" element={<LiveMap />} />
        <Route path="/my-reports" element={<MyReports />} />
        <Route path="/settings" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
