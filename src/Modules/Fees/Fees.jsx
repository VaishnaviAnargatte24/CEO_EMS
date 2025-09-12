import { useState, useEffect } from "react";
import "../../Modules/Fees/Fees.css";
import { data, classes, years } from "../../Modules/Fees/StudentData";
import Header from "../../Components/Header/Header";
 // ✅ Import years too

export default function Fees() {
  const [selectedStudent, setSelectedStudent] = useState("Student Name");
  const [selectedClass, setSelectedClass] = useState("Select Class");
  const [selectedYear, setSelectedYear] = useState("Select Year");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // ✅ Filter logic
  const filteredData =
    selectedYear !== "2024" && selectedYear !== "Select Year"
      ? [] // show blank if not 2024 or not selected
      : data.filter((student) => {
          const studentMatch =
            selectedStudent === "Student Name" ||
            student.name === selectedStudent;
          const classMatch =
            selectedClass === "Select Class" || student.class === selectedClass;
          return studentMatch && classMatch;
        });

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedStudent, selectedClass, selectedYear, rowsPerPage]);

  return (
    <div className="page">
    <Header/>
      {/* ✅ Top Header with Filters */}
      <div className="fees-header">
        <div className="header-left">
          <span className="menu-icon">☰</span>
          <h2>Fees</h2>
        </div>
        <div className="header-right">
          {/* ✅ Student Name Dropdown */}
          <select
            value={selectedStudent}
            onChange={(e) => setSelectedStudent(e.target.value)}
          >
            <option>Student Name</option>
            {data.map((student) => (
              <option key={student.id} value={student.name}>
                {student.name}
              </option>
            ))}
          </select>

          {/* ✅ Class Dropdown */}
          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            <option>Select Class</option>
            {classes.map((cls, index) => (
              <option key={index} value={cls}>
                {cls}
              </option>
            ))}
          </select>

          {/* ✅ Year Dropdown */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            <option>Select Year</option>
            {years.map((yr, index) => (
              <option key={index} value={yr}>
                {yr}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* ✅ Table */}
      <div className="table-container">
        <table className="fees-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Total Fees</th>
              <th>Fees Credit</th>
              <th>Pending Fees</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.class}</td>
                <td>{row.total}</td>
                <td>{row.credit}</td>
                <td>{row.pending}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ✅ Show message if no data */}
        {paginatedData.length === 0 && (
          <p className="no-data">No records found</p>
        )}
      </div>

      {/* ✅ Bottom Pagination Bar */}
      <div className="fees-bottom-bar">
        <div className="pagination">
          <span
            className="pagination-prev"
            onClick={handlePrev}
            style={{
              pointerEvents: currentPage === 1 ? "none" : "auto",
              opacity: currentPage === 1 ? 0.5 : 1,
            }}
          >
            Previous
          </span>

          {/* Pagination with ellipsis */}
          {(() => {
            const pages = [];
            if (totalPages <= 7) {
              // Show all pages if <=7
              for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
              }
            } else {
              // More than 7 pages, show 1,2,3 ... last
              if (currentPage <= 4) {
                pages.push(1, 2, 3, 4, 5, "ellipsis", totalPages);
              } else if (currentPage > totalPages - 4) {
                pages.push(1, "ellipsis");
                for (let i = totalPages - 4; i <= totalPages; i++) {
                  pages.push(i);
                }
              } else {
                pages.push(
                  1,
                  "ellipsis",
                  currentPage - 1,
                  currentPage,
                  currentPage + 1,
                  "ellipsis",
                  totalPages
                );
              }
            }

            return pages.map((page, idx) => {
              if (page === "ellipsis") {
                return (
                  <span key={"ellipsis-" + idx} style={{ cursor: "default" }}>
                    ...
                  </span>
                );
              }
              return (
                <span
                  key={page}
                  className={`pagination-page${
                    currentPage === page ? " active" : ""
                  }`}
                  onClick={() => handlePageClick(page)}
                >
                  {page}
                </span>
              );
            });
          })()}

          <span
            className="pagination-next"
            onClick={handleNext}
            style={{
              pointerEvents:
                currentPage === totalPages || totalPages === 0
                  ? "none"
                  : "auto",
              opacity:
                currentPage === totalPages || totalPages === 0 ? 0.5 : 1,
            }}
          >
            Next
          </span>
        </div>
        <div className="rows-dropdown">
          <select
            value={rowsPerPage}
            onChange={(e) => {
              setCurrentPage(1);
              setRowsPerPage(Number(e.target.value));
            }}
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </div>
      </div>
    </div>
  );
}
