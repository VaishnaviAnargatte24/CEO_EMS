import { useState } from "react";
import "./Attendence.css"; // Make sure you updated the CSS file name here
import { students } from "./studentData";

export default function Attendence() {
  const [student, setStudent] = useState("Student Name");
  const [className, setClassName] = useState("Select Class");
  const [year, setYear] = useState("2024");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredStudents =
    year === "2024"
      ? students.filter((s) => {
          const matchStudent = student === "Student Name" || s.name === student;
          const matchClass = className === "Select Class" || s.class === className;
          return matchStudent && matchClass;
        })
      : [];

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentStudents = filteredStudents.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="page">
      {/* Header */}
      <div className="attendence-header">
        <div className="attendence-left">
          <span className="attendence-title">Attendence</span>
        </div>

        <div className="attendence-filters">
          <select
            value={student}
            onChange={(e) => {
              setStudent(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option>Student Name</option>
            {students.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>

          <select
            value={className}
            onChange={(e) => {
              setClassName(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option>Select Class</option>
            <option>11th</option>
            <option>12th</option>
          </select>

          <select
            value={year}
            onChange={(e) => {
              setYear(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option>2024</option>
            <option>2023</option>
            <option>2022</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="attendence-table-container">
        {currentStudents.length > 0 ? (
          <>
            <table className="attendence-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Student Name</th>
                  <th>Exam</th>
                  <th>Class</th>
                  <th>Parents Mobile Number</th>
                  <th>Average Present</th>
                </tr>
              </thead>
              <tbody>
  {currentStudents.map((s) => (
    <tr key={s.id}>
      <td>{s.id}</td>
      <td>{s.name}</td>
      <td>{s.exam}</td>
      <td>{s.className}</td>
      <td>{s.parentMobile}</td>
      <td>{s.averagePresent}</td>
    </tr>
  ))}
</tbody>

            </table>

            {/* Pagination */}
        <div className="pagination-container">
  <div className="pagination-controls">
    <button
      className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
      disabled={currentPage === 1}
      onClick={() => handlePageChange(currentPage - 1)}
    >
      Previous
    </button>

    {Array.from({ length: Math.min(totalPages, 3) }, (_, i) => (
      <button
        key={i + 1}
        onClick={() => handlePageChange(i + 1)}
        className={`pagination-page ${currentPage === i + 1 ? "active" : ""}`}
      >
        {i + 1}
      </button>
    ))}

    {totalPages > 3 && (
      <>
        <span className="pagination-dots">...</span>
        <button
          onClick={() => handlePageChange(totalPages)}
          className={`pagination-page ${currentPage === totalPages ? "active" : ""}`}
        >
          {totalPages}
        </button>
      </>
    )}

    <button
      className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
      disabled={currentPage === totalPages}
      onClick={() => handlePageChange(currentPage + 1)}
    >
     ... Next
    </button>
  </div>

  <div className="pagination-dropdown">
    <select
      className="pagination-select"
      value={itemsPerPage}
      onChange={(e) => {
        setItemsPerPage(Number(e.target.value));
        setCurrentPage(1);
      }}
    >
      {[5, 10, 20, 50].map((count) => (
        <option key={count} value={count}>
          {count}
        </option>
      ))}
    </select>
  </div>
</div>
          </>
        ) : (
          <div className="no-data">No data found</div>
        )}
      </div>
    </div>
  );
}
