// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Components/SideBar/SideBar';
import Dashboard from './Modules/Dashboard/DashBoard'; // Import your dashboard
// Import other components (Calendar, TeachersList, etc.)

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            {/* Add routes for other pages here */}
            {/* <Route path="/calendar" element={<Calendar />} /> */}
            {/* <Route path="/teachers/list" element={<TeachersList />} /> */}
            {/* You can add more routes as needed */}
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;