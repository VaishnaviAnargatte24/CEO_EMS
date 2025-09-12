import "./QuestionBank.css";

const teachers = ["Teacher Name", "Alice Johnson", "Bob Singh", "C. Rao"];
const subjects = ["Select Subject", "Physics", "Chemistry", "Mathematics"];
const courses = [
  "Fundamentals of Physics",
  "Mechanics",
  "Electromagnetism",
  "Optics",
];

const sampleQuestions = new Array(5).fill({
  text:
    "When light from some sources enters to the earth's atmosphere, it gets scattered. Which among the following is a reason behind scattering?",
  options: ["Option 1", "Option 2", "Option 3", "Option 4"],
  difficulty: "Easy",
});

export default function QuestionBank() {
  return (
    <div className="qb-root">
      {/* Header */}
      <header className="qb-header">
           {/* Added icon + title */}
        <div className="qb-title-wrap">
          <span className="menu-icon">☰</span>
          <span className="qb-title">Question Bank</span>
        </div>

        {/* Dropdown controls */}
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

      {/* Main */}
      <main className="qb-container">
        <div className="qb-wrapper">
          <div className="qb-top">
            <h2 className="course">Fundamentals of Physics</h2>
            <div className="meta">5 Questions</div>
          </div>

          <div className="divider" />

          <div className="cards">
            {sampleQuestions.map((q, i) => (
              <article className="card" key={i}>
                <div className="card-content">
                  <div className="q-index">{i + 1}.</div>

                  <div className="q-body">
                    <div className="q-text">{q.text}</div>

                    <div className="divider" />

                    <form
                      className="options"
                      aria-label={`question-${i + 1}-options`}
                    >
                      {q.options.map((opt, j) => (
                        <label className="option" key={j}>
                          <input type="radio" name={`q-${i}`} />
                          <span className="option-text">{opt}</span>
                        </label>
                      ))}
                    </form>

                    <div className="divider" />

                    <div className="pill-row">
                      <span className="difficulty">{q.difficulty}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
