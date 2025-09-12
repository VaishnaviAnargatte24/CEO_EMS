Papers.jsx

import "./Papers.css";

const teachers = ["Teacher Name", "Alice Johnson", "Bob Singh", "C. Rao"];
const subjects = ["Select Subject", "Physics", "Chemistry", "Mathematics"];
const courses = [
  "Fundamentals of Physics",
  "Mechanics",
  "Electromagnetism",
  "Optics",
];

const QUESTION_TEXT = `The de-Broglie wavelength of a neutron in thermal equilibrium with heavy water
at a temperature T (kelvin) and mass m, is:`;

export default function Papers() {
  

  // create array of 20 questions
  const questions = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    text: QUESTION_TEXT,
  }));

  return (
    <div className="qb-root">
      <header className="qb-header">
        <div className="qb-title-wrap">
          <span className="menu-icon" aria-hidden>
            ☰
          </span>
          <span className="qb-title">Papers</span>
        </div>

        <div className="qb-controls">
          <label className="select-wrap">
            <select aria-label="Select teacher" defaultValue={teachers[0]}>
              {teachers.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </label>

          <label className="select-wrap">
            <select aria-label="Select subject" defaultValue={subjects[0]}>
              {subjects.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </label>

          <label className="select-wrap">
            <select aria-label="Select course" defaultValue={courses[0]}>
              {courses.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <main className="qb-container">
        <div className="qb-wrapper">
          <div className="qb-top">
            <h2 className="course">Fundamentals of Physics</h2>
            <div className="meta">20 Questions</div>
          </div>

          <div className="divider" />

          {/* Grid of question cards (2 columns on wide screens) */}
          <div className="questions-grid">
            {questions.map((q) => (
              <article key={q.id} className="question-card small-card" aria-labelledby={`q-${q.id}`}>
                <div className="q-header">
                  <h3 id={`q-${q.id}`} className="q-number">Question {q.id}</h3>
                  <div className="timer">00:50</div>
                </div>

                <hr className="q-sep" />

                <p className="q-text">{q.text}</p>

                {/* Choices grid (just labels, no radio buttons) */}
                 
                <div className="choices-grid compact">
                <div className="choice-compact">
                    <span className="choice-inline">A)</span>
                    <div className="fraction">
                    <span className="num">h</span>
                    <span className="den">m k T</span>
                    </div>
                </div>

                <div className="choice-compact">
                    <span className="choice-inline">B)</span>
                    <div className="fraction">
                    <span className="num">h</span>
                    <span className="den">&nbsp;</span>
                    </div>
                </div>

                <div className="choice-compact">
                    <span className="choice-inline">C)</span>
                    <div className="fraction">
                    <span className="num">2h</span>
                    <span className="den">√(3 m k T)</span>
                    </div>
                </div>

                <div className="choice-compact">
                    <span className="choice-inline">D)</span>
                    <div className="fraction">
                    <span className="num">2h</span>
                    <span className="den">√‾</span>
                    </div>
                </div>
                </div>


                <div className="bottom-row small">
                  <label className="pill"><input type="radio" name={`pick${q.id}`} /> <span>1)</span></label>
                  <label className="pill"><input type="radio" name={`pick${q.id}`} /> <span>2)</span></label>
                  <label className="pill"><input type="radio" name={`pick${q.id}`} /> <span>3)</span></label>
                  <label className="pill"><input type="radio" name={`pick${q.id}`} /> <span>4)</span></label>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
