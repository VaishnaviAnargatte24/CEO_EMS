import React from "react";
import "./DetailedResult.css";
import resultImg from "../../../assets/Images/result.png";


function DetailedResult({ student }) {
  const resultData = {
    candidateName: student.name,
    examName: student.exam,
    subjectName: "Physics",
    className: "11th",
    rollNumber: 89,
    totalQuestion: 45,
    totalAttempted: 40,
    totalUnattempted: 5,
    correctAnswers: 40,
    incorrectAnswers: 5,
    score: student.marks,
  };

  return (
    <div className="detailed-result-page">
      <div className="result-header-details">
        <div className="card-box">
          <div className="card-item">
            <span className="card-label">Candidate Name -</span>
            <span className="card-value">{resultData.candidateName}</span>
          </div>
          <div className="card-item">
            <span className="card-label">Exam Name -</span>
            <span className="card-value">{resultData.examName}</span>
          </div>
          <div className="card-item">
            <span className="card-label">Subject Name -</span>
            <span className="card-value">{resultData.subjectName}</span>
          </div>
        </div>
        <div className="card-box">
          <div className="card-item">
            <span className="card-label">Class -</span>
            <span className="card-value">{resultData.className}</span>
          </div>
          <div className="card-item">
            <span className="card-label">Roll Number -</span>
            <span className="card-value">{resultData.rollNumber}</span>
          </div>
        </div>
      </div>

      {/* Middle illustration and axis */}
      <div className="score-image-wrapper">
        <img
          src={resultImg}
          alt="Girl with flag"
          className="score-image"
        />
        <div className="score-axis">
          <div className="score-axis-line"></div>
          <div className="score-axis-labels">
            {Array.from({ length: 11 }, (_, i) => (
              <span key={i} className="score-axis-label">{i * 10}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="score-card">
        <h3>Score Card</h3>
        <div className="score-details">
          <div className="score-item">
            <span className="score-label">Total Questions:</span>
            <span className="score-value">{resultData.totalQuestion}</span>
          </div>
          <div className="score-item">
            <span className="score-label">Total Attempted:</span>
            <span className="score-value">{resultData.totalAttempted}</span>
          </div>
          <div className="score-item">
            <span className="score-label">Total Unattempted:</span>
            <span className="score-value">{resultData.totalUnattempted}</span>
          </div>
          <div className="score-item">
            <span className="score-label">Correct Answers:</span>
            <span className="score-value">{resultData.correctAnswers}</span>
          </div>
          <div className="score-item">
            <span className="score-label">Incorrect Answers:</span>
            <span className="score-value">{resultData.incorrectAnswers}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailedResult;