import React from "react";
import { BrowserRouter, useLocation, Routes, Route } from "react-router-dom";
import Sidebar from "./Components/SideBar/SideBar";
import AppRoutes from "../src/Routes/AppRoutes";
import Login from "./Modules/Login/Login";

const AppContent = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/";

  // This is a placeholder for actual login state management.
  // In a real application, you would use a state hook or context.
  const handleLoginSuccess = () => {
    window.location.href = "/dashboard";
  };

  return (
    <div style={{ display: "flex", width: "100%", height: "100vh" }}>
      {!isLoginPage && <Sidebar />}
      <div style={{ flex: 1, padding: "20px", overflowY: "auto" }}>
        <Routes>
          <Route path="/" element={<Login onLoginSuccess={handleLoginSuccess} />} />
          <Route path="/*" element={<AppRoutes />} />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
};

export default App;