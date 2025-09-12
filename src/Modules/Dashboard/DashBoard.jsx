// src/Modules/Dashboard/Dashboard.jsx
import React, { useState } from "react";
import "../../Modules/Dashboard/DashBoard.css";
import Sidebar from "../../Components/SideBar/SideBar";
import Header from "../../Components/Header/Header";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend,
  ResponsiveContainer, PieChart, Pie, Cell
} from "recharts";
import { FaBars } from "react-icons/fa"; // ✅ menu icon

// Icons
import TopperIcon from "../../assets/Icons/Topper_Student_Dash.svg";
import AverageIcon from "../../assets/Icons/Average_Student_Dash.svg";
import BelowAverageIcon from "../../assets/Icons/Below_Average_Student_Dash.svg";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const toggleSidebar = () => setSidebarOpen((s) => !s);
  const closeSidebar = () => setSidebarOpen(false);

  // Dummy Data
  const data = [
    { month: "Jan", class11: 55, class12: 30 },
    { month: "Feb", class11: 45, class12: 25 },
    { month: "Mar", class11: 40, class12: 20 },
    { month: "Apr", class11: 90, class12: 60 },
    { month: "May", class11: 60, class12: 50 },
    { month: "Jun", class11: 50, class12: 30 },
    { month: "Jul", class11: 65, class12: 40 },
    { month: "Aug", class11: 55, class12: 35 },
    { month: "Sep", class11: 50, class12: 30 },
    { month: "Oct", class11: 45, class12: 20 },
    { month: "Nov", class11: 60, class12: 35 },
    { month: "Dec", class11: 70, class12: 50 },
  ];

  const pieData = [
    { name: "11th Class", value: 45 },
    { name: "12th Class", value: 55 },
  ];
  const COLORS = ["#C77DFF", "#5A189A"];

  const topperStudents = [
    { name: "Rahul Wagh", percentage: "98%" },
    { name: "Rohan Singh", percentage: "98%" },
    { name: "Priya Sharma", percentage: "97%" },
    { name: "Aditya Desai", percentage: "95%" },
    { name: "Vihaan Rao", percentage: "94%" },
    { name: "Neha Agarwal", percentage: "94%" },
    { name: "Madhuri Singh", percentage: "93%" },
    { name: "Devendra Agarwal", percentage: "92%" },
    { name: "Aryan Gupta", percentage: "91%" },
    { name: "Rhea Yadav", percentage: "91%" },
  ];
  const averageStudents = [
    { name: "Student A", percentage: "72%" },
    { name: "Student B", percentage: "70%" },
    { name: "Student C", percentage: "68%" },
  ];
  const belowAverageStudents = [
    { name: "Student X", percentage: "45%" },
    { name: "Student Y", percentage: "42%" },
    { name: "Student Z", percentage: "39%" },
  ];

  const renderTable = (students, title, range) => (
    <div className="modal">
      <div className="modal-content">
        <h3>{title}</h3>
        <p>{range}</p>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Percentage (%)</th>
            </tr>
          </thead>
          <tbody>
            {students.map((s, i) => (
              <tr key={i}>
                <td>{s.name}</td>
                <td>{s.percentage}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="close-btn" onClick={() => setActiveModal(null)}>Close</button>
      </div>
    </div>
  );

  return (
    <div className="dashboard-container">
      <Sidebar isOpen={isSidebarOpen} />
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      />

      <div className="main-content">
        <Header />

        <div className="page-wrap">
          {/* Dashboard Header with Menu */}
          <div className="dashboard-header">
            <FaBars className="menu-icon" onClick={toggleSidebar} />
            <h2>Dashboard</h2>
          </div>

          {/* Cards */}
          <div className="cards">
            <div className="card topper">
              <h3>Topper Student</h3>
              <p>100% to 75%</p>
              <button onClick={() => setActiveModal("topper")}>View All</button>
              <div className="card-icon-wrap">
                <img src={TopperIcon} alt="Topper Student" />
              </div>
            </div>

            <div className="card average">
              <h3>Average Student</h3>
              <p>75% to 50%</p>
              <button onClick={() => setActiveModal("average")}>View All</button>
              <div className="card-icon-wrap">
                <img src={AverageIcon} alt="Average Student" />
              </div>
            </div>

            <div className="card below-average">
              <h3>Below Average Student</h3>
              <p>Below 50%</p>
              <button onClick={() => setActiveModal("below")}>View All</button>
              <div className="card-icon-wrap">
                <img src={BelowAverageIcon} alt="Below Average Student" />
              </div>
            </div>
          </div>

          {/* Modals */}
          {activeModal === "topper" && renderTable(topperStudents, "Topper Student", "100% to 75%")}
          {activeModal === "average" && renderTable(averageStudents, "Average Student", "75% to 50%")}
          {activeModal === "below" && renderTable(belowAverageStudents, "Below Average Student", "Below 50%")}

          {/* Statistics */}
          <div className="stats-header">
            <h3 className="section-title">Statistics</h3>
            <div className="filters">
              <select>
                <option>11th</option>
                <option>12th</option>
              </select>
              <select>
                <option>NEET</option>
                <option>JEE</option>
              </select>
            </div>
          </div>

          <div className="stats">
            {/* Bar Chart Card */}
            <div className="chart-card">
              <div className="chart-header">Performance</div>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip
                    content={({ active, payload, label }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="custom-tooltip">
                            <p>{label}</p>
                            {payload.map((pl, i) => (
                              <p key={i} style={{ color: pl.fill }}>
                                {pl.name}: {pl.value}
                              </p>
                            ))}
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Legend />
                  <Bar dataKey="class11" fill="#C77DFF" name="11th Class" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="class12" fill="#5A189A" name="12th Class" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart Card */}
            <div className="chart-card" style={{ position: "relative" }}>
              <div className="chart-header">Pie Chart</div>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={105}
                    dataKey="value"
                  >
                    {pieData.map((entry, i) => (
                      <Cell key={i} fill={COLORS[i]} />
                    ))}
                  </Pie>
                  <Legend />
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>

              {/* Center Label */}
              <div className="pie-center-label">55%<br />Students</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
