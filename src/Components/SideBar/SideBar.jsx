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

        <li className={location.pathname === "/calender" ? "active" : ""}>
          <Link to="/calender">
            <FaCalendarAlt className="icon" />
            <span>Calender</span>
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
            <li className={location.pathname === "/teacher/list" ? "active" : ""}>
              <Link to="/teacher/list">List</Link>
            </li>
            <li className={location.pathname === "/teacher/papers" ? "active" : ""}>
              <Link to="/teacher/papers">Papers</Link>
            </li>
            <li className={location.pathname === "/teacher/questionbank" ? "active" : ""}>
              <Link to="/teacher/questionbank">Question Bank</Link>
            </li>
            <li className={location.pathname === "/teacher/salary" ? "active" : ""}>
              <Link to="/teacher/salary">Salary</Link>
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
            <li className={location.pathname === "/students/attendence" ? "active" : ""}>
              <Link to="/students/attendence">Attendence</Link>
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