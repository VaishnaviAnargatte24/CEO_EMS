import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../Modules/Dashboard/DashBoard";
import Calender from "../Modules/Calender/Calender";
import Fees from "../Modules/Fees/Fees";
import Profile from "../Modules/Profile/Profile";
import List from "../Modules/Teacher/List/List";
import Papers from "../Modules/Teacher/Papers/Papers";
import QuestionBank from "../Modules/Teacher/QuestionBank/QuestionBank";
import Salary from "../Modules/Teacher/Salary/Salary";
import Login from "../Modules/Login/Login";




const AppRoutes = () => {
  return (
    <Routes>
     <Route path="/" element={<Login />} />
      {/* Dashboard */}
      <Route path="/dashboard" element={<Dashboard />} />
      
      <Route path="/calender" element={<Calender />} />


      {/* Teachers */}
        <Route path="/teacher/list" element={<List />} />
        <Route path="/teacher/papers" element={<Papers />} />
        <Route path="/teacher/questionbank" element={<QuestionBank />} />
        <Route path="/teacher/salary" element={<Salary />} />


      <Route path="/fees" element={<Fees />} />
      <Route path="/profile" element={<Profile />} />
      {/* Default redirect */}
      <Route path="*" element={<Dashboard />} />
    </Routes>
  );
};

export default AppRoutes;
