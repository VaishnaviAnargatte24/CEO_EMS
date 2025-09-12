import React from "react";
import "./List.css";

const teachers = [
  { id: 1, name: "Seema Bhavsar", subject: "Mathematics", class: "11th", MobileNumber:"8767657645", AveragePresent:"89%" },
  { id: 2, name: "Vidya Gupta", subject: "Physics", class: "11th", MobileNumber:"8767657645", AveragePresent:"90%"},
  { id: 3, name: "Kavya Nair", subject: "Biology", class: "11th", MobileNumber:"8767657645", AveragePresent:"85%" },
  { id: 4, name: "Rajesh Khair", subject: "Mathematics", class: "11th",MobileNumber:"8767657645", AveragePresent:"91%" },
  { id: 5, name: "Meera Kapoor", subject: "Physics", class: "11th",MobileNumber:"8767657645" , AveragePresent:"92%" },
  { id: 6, name: "Amit Kumar", subject: "Biology", class: "12th", MobileNumber:"8767657645", AveragePresent:"91%"},
  { id: 7, name: "Karan Desai", subject: "Physics", class: "12th",MobileNumber:"8767657645" , AveragePresent:"89%"},
  { id: 8, name: "Meera Kapoor", subject: "Mathematics", class: "12th", MobileNumber:"8767657645" , AveragePresent:"92%"},
  { id: 9, name: "Arjun Sharma", subject: "Physics", class: "12th", MobileNumber:"8767657645", AveragePresent:"89%" },
  { id: 10, name: "Meera Kapoor", subject: "Biology", class: "12th",MobileNumber:"8767657645" , AveragePresent:"85%" },
];

export default function List() {
  return (
    <div className="list-page">
      <div className="list-root">
        <header className="list-header">
          <button className="hamburger" aria-label="menu">☰</button>
          <h1 className="list-title">List</h1>
        </header>

        <div className="list-card">
          <div className="table-wrap">
            <table className="list-table" role="table" aria-label="list table">
              <thead>
                <tr>
                  <th className="col-sm">Sr. No.</th>
                  <th>Teacher Name</th>
                  <th>Subject</th>
                  <th>Class</th>
                  <th>Mobile Number</th>
                  <th >Average Present</th>
                </tr>
              </thead>

              <tbody>
                {teachers.map((t) => (
                  <tr key={t.id}>
                    <td className="col-sm">{t.id}</td>
                    <td>{t.name}</td>
                    <td>{t.subject}</td>
                    <td>{t.class}</td>
                    <td>{t.MobileNumber}</td>
                    <td className="col-sm salary-amount">{t.AveragePresent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
