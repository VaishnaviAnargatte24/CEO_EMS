import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Modules/Dashboard/DashBoard";

// You can add more pages here later (like Students, Reports, etc.)
const AppRoutes = () => {
  return (
    <Routes>
      {/* Dashboard Route */}
      <Route path="/" element={<Dashboard />} />

      {/* Example extra route */}
      {/* <Route path="/students" element={<Students />} /> */}
    </Routes>
  );
};

export default AppRoutes;
