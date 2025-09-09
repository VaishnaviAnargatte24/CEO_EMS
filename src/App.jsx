import React from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from "./Components/SideBar/SideBar";
import AppRoutes from "../src/Routes/AppRoutes";

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: "flex" }}>
        {/* Sidebar always visible */}
        <Sidebar />

        {/* Main content */}
        <div style={{ flex: 1, padding: "20px" }}>
          <AppRoutes />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
