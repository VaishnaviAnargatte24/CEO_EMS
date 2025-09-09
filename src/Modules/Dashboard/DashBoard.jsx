import React, { useState } from "react";
import "../../Modules/Dashboard/DashBoard.css";
import Sidebar from "../../Components/SideBar/SideBar"; // Import the new Sidebar component
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Dashboard = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  // Sample data for bar chart
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

  // Pie chart data
  const pieData = [
    { name: "11th Class", value: 45 },
    { name: "12th Class", value: 55 },
  ];

  const COLORS = ["#a855f7", "#4c1d95"];

  return (
    <div className="dashboard-container">
      {/* Sidebar only appears if open */}
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} />}

      <div className="main-content">
        <div className="dashboard">
          {/* Header */}
          <div className="dashboard-header">
            <button className="menu-icon" onClick={toggleSidebar}>
              &#9776;
            </button>
            <h2 className="dashboard-title">Dashboard</h2>
          </div>

          {/* Top Cards */}
          <div className="cards">
            <div className="card topper">
              <h3>Topper Student</h3>
              <p>100% to 75%</p>
              <a href="/">View All</a>
            </div>
            <div className="card average">
              <h3>Average Student</h3>
              <p>75% to 50%</p>
              <a href="/">View All</a>
            </div>
            <div className="card below-average">
              <h3>Below Average Student</h3>
              <p>Below 50%</p>
              <a href="/">View All</a>
            </div>
          </div>
        </div>

        {/* Statistics */}
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

        <div className="stats">
          {/* Bar Chart */}
          <div className="bar-chart">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="class11" fill="#a855f7" name="11th Class" />
                <Bar dataKey="class12" fill="#4c1d95" name="12th Class" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pie Chart */}
          <div className="pie-chart">
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  dataKey="value"
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
