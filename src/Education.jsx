import "./Education.css";

function Education() {
  const education = [
    {
      year: "2022 - 2026",
      degree: "B.Tech in Information Technology",
      college: "SRKR Engineering College, India",
      description:
        "Currently pursuing B.Tech in Information Technology with an interest in web development and software technologies.",
    },
    {
      year: "2020 - 2022",
      degree: "Intermediate - MPC",
      college: "Sasi Junior College for Girls, India",
      description:
        "Completed Intermediate education with Mathematics, Physics and Chemistry.",
    },
    {
      year: "2019 - 2020",
      degree: "SSC",
      college: "Sasi English Medium High School, India",
      description:
        "Completed secondary school education and developed an interest in technology and computer science.",
    },
  ];

  return (
    <section className="education-page">

      <div className="education-header">

        <p>My Academic Journey</p>

        <h1>
          Education <span>& Learning</span>
        </h1>

        <p className="education-description">
          My educational background and academic journey that
          helped me build a foundation in technology and
          software development.
        </p>

      </div>

      <div className="education-timeline">

        {education.map((item, index) => (
          <div
            className={`education-item ${
              index % 2 === 0 ? "left" : "right"
            }`}
            key={item.year}
          >

            <div className="timeline-dot"></div>

            <div className="education-card">

              <span className="education-year">
                {item.year}
              </span>

              <h2>{item.degree}</h2>

              <h3>{item.college}</h3>

              <p>{item.description}</p>

            </div>

          </div>
        ))}

      </div>

      <div className="learning-section">

        <div className="learning-icon">
          📚
        </div>

        <div>
          <h2>Continuous Learning</h2>

          <p>
            I believe learning is a continuous process. I regularly
            practice coding, build projects and explore new
            technologies to improve my development skills.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Education;