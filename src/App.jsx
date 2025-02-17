import { useState } from "react";
import "./App.css";
import AddReport from "./components/AddReport";
import ReportContainer from "./components/ReportContainer";
function App() {
  return (
    <div className="container mx-auto mt-8 p-4 flex flex-col gap-20">
      <AddReport />
      <ReportContainer />
    </div>
  );
}

export default App;
