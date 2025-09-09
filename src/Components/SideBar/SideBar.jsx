// src/Components/SideBar/SideBar.jsx
import React, { useState } from "react";
import {
  FaThLarge, FaCalendarAlt, FaChalkboardTeacher, FaUserGraduate,
  FaMoneyCheckAlt, FaUser, FaSignOutAlt
} from "react-icons/fa";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "./SideBar.css";

const Sidebar = ({ isOpen }) => {
  const [openTeachers, setOpenTeachers] = useState(true);
  const [openStudents, setOpenStudents] = useState(true);
  const location = useLocation();

  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <ul>
        <li className={location.pathname === "/dashboard" ? "active" : ""}>
          <Link to="/dashboard">
            <FaThLarge className="icon" />
            <span>Dashboard</span>
          </Link>
        </li>

        <li className={location.pathname === "/calendar" ? "active" : ""}>
          <Link to="/calendar">
            <FaCalendarAlt className="icon" />
            <span>Calendar</span>
          </Link>
        </li>

        {/* Teachers */}
        <li className="dropdown" onClick={() => setOpenTeachers((s) => !s)}>
          <FaChalkboardTeacher className="icon" />
          <span style={{ flex: 1 }}>Teachers</span>
          {openTeachers ? <FiChevronUp /> : <FiChevronDown />}
        </li>
        {openTeachers && (
          <ul className="submenu">
            <li className={location.pathname === "/teachers/list" ? "active" : ""}>
              <Link to="/teachers/list">List</Link>
            </li>
            <li className={location.pathname === "/teachers/papers" ? "active" : ""}>
              <Link to="/teachers/papers">Papers</Link>
            </li>
            <li className={location.pathname === "/teachers/question-bank" ? "active" : ""}>
              <Link to="/teachers/question-bank">Question Bank</Link>
            </li>
            <li className={location.pathname === "/teachers/salary" ? "active" : ""}>
              <Link to="/teachers/salary">Salary</Link>
            </li>
          </ul>
        )}

        {/* Students */}
        <li className="dropdown" onClick={() => setOpenStudents((s) => !s)}>
          <FaUserGraduate className="icon" />
          <span style={{ flex: 1 }}>Students</span>
          {openStudents ? <FiChevronUp /> : <FiChevronDown />}
        </li>
        {openStudents && (
          <ul className="submenu">
            <li className={location.pathname === "/students/attendance" ? "active" : ""}>
              <Link to="/students/attendance">Attendance</Link>
            </li>
            <li className={location.pathname === "/students/exams" ? "active" : ""}>
              <Link to="/students/exams">Exams</Link>
            </li>
            <li className={location.pathname === "/students/results" ? "active" : ""}>
              <Link to="/students/results">Results</Link>
            </li>
          </ul>
        )}

        <li className={location.pathname === "/fees" ? "active" : ""}>
          <Link to="/fees">
            <FaMoneyCheckAlt className="icon" />
            <span>Fees</span>
          </Link>
        </li>

        <li className={location.pathname === "/profile" ? "active" : ""}>
          <Link to="/profile">
            <FaUser className="icon" />
            <span>Profile</span>
          </Link>
        </li>

        <li className={location.pathname === "/logout" ? "active" : ""}>
          <Link to="/logout">
            <FaSignOutAlt className="icon" />
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
