import { useState } from "react";
import "./Results.css";
import { Menu } from "lucide-react";
import { students } from "./studentData";
import DetailedResult from "./DetailedResult";


export default function Results() {
  const [student, setStudent] = useState("Student Name");
  const [className, setClassName] = useState("Select Class");
  const [year, setYear] = useState("2024");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents =
    year === "2024"
      ? students.filter((s) => {
          const matchStudent = student === "Student Name" || s.name === student;
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

  const handleStudentClick = (studentData) => {
    setSelectedStudent(studentData);
  };

  const handleBackClick = () => {
    setSelectedStudent(null);
  };

  if (selectedStudent) {
    return <DetailedResult student={selectedStudent} onBackClick={handleBackClick} />;
  }

  return (
    <div className="page">
      {/* Header */}
      <div className="result-header">
        <div className="result-left">
          <Menu size={20} className="menu-icon" />
          <span className="result-title">Result</span>
        </div>

        <div className="result-filters">
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
      <div className="result-table-container">
        {currentStudents.length > 0 ? (
          <>
            <table className="result-table">
              <thead>
                <tr>
                  <th>Sr. No.</th>
                  <th>Student Name</th>
                  <th>Exam</th>
                  <th>Date</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                {currentStudents.map((s) => (
                  <tr key={s.id}>
                    <td>{s.id}</td>
                    <td>
                      <a href="#!" className="student-link" onClick={() => handleStudentClick(s)}>
                        {s.name}
                      </a>
                    </td>
                    <td>{s.exam}</td>
                    <td>{s.date}</td>
                    <td>{s.marks}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="pagination-container">
              <button
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                className={`pagination-button ${currentPage === 1 ? "disabled" : ""}`}
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

              {totalPages > 3 && <span className="pagination-dots">...</span>}

              {totalPages > 3 && (
                <button
                  onClick={() => handlePageChange(totalPages)}
                  className={`pagination-page ${currentPage === totalPages ? "active" : ""}`}
                >
                  {totalPages}
                </button>
              )}

              <button
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                className={`pagination-button ${currentPage === totalPages ? "disabled" : ""}`}
              >
                Next
              </button>

              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="pagination-select"
              >
                {[5, 10, 20, 50].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
          </>
        ) : (
          <div className="no-data">No data found</div>
        )}
      </div>
    </div>
  );
}