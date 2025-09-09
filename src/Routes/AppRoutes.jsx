import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Modules/Dashboard/DashBoard";




const AppRoutes = () => {
  return (
    <Routes>
      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />

      {/* Default redirect */}
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
