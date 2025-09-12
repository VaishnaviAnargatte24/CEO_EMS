import { useState } from "react";
import "../Exams/Exams.css"; // Ensure the CSS file is correctly named and located
import { students } from "./studData";

export default function Exam() {
  const [student, setStudent] = useState("Student Count");
  const [className, setClassName] = useState("Select Class");
  const [year, setYear] = useState("2024");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const filteredStudents =
    year === "2024"
      ? students.filter((s) => {
          const matchStudent = student === "Student Count" || s.name === student;
          const matchClass = className === "Select Class" || s.exam === className;
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
      <div className="exam-header">
        <div className="exam-left">
          <span className="exam-title">Exams</span>
        </div>

        <div className="exam-filters">
          <select value={student} onChange={(e) => setStudent(e.target.value)}>
            <option>Student Count</option>
            {students.map((s) => (
              <option key={s.id} value={s.name}>{s.name}</option>
            ))}
          </select>

          <select value={className} onChange={(e) => setClassName(e.target.value)}>
            <option>Select Class</option>
            <option>JEE</option>
            <option>NEET</option>
          </select>

          <select value={year} onChange={(e) => setYear(e.target.value)}>
            <option>2024</option>
            <option>2023</option>
          </select>
        </div>
      </div>

      <div className="exam-table-container">
        <table className="exam-table">
          <thead>
            <tr>
              <th>Sr. No.</th>
              <th>Student Name</th>
              <th>Exam</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {currentStudents.map((s, index) => (
              <tr key={s.id}>
                <td>{startIndex + index + 1}</td>
                <td>{s.name}</td>
                <td>{s.exam}</td>
                <td>{s.date}</td>
              </tr>
            ))}
          </tbody>
        </table>


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

      </div>
    </div>
  );
}
