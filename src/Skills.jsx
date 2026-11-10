import "./Skills.css";

function Skills() {
  const skills = [
    {
      name: "HTML",
      icon: "🌐",
      level: "Comfortable",
    },
    {
      name: "CSS",
      icon: "🎨",
      level: "Comfortable",
    },
    {
      name: "JavaScript",
      icon: "JS",
      level: "Intermediate",
    },
    {
      name: "React.js",
      icon: "⚛",
      level: "Intermediate",
    },
    {
      name: "Bootstrap",
      icon: "B",
      level: "Comfortable",
    },
    {
      name: "Git",
      icon: "🔀",
      level: "Comfortable",
    },
    {
      name: "GitHub",
      icon: "◉",
      level: "Comfortable",
    },
    {
      name: "MySQL",
      icon: "🗄️",
      level: "Beginner",
    },
    {
      name: "Flask",
      icon: "F",
      level: "Beginner",
    },
    {
      name: "Python",
      icon: "🐍",
      level: "Beginner",
    },
  ];

  return (
    <section className="skills-page">

      <div className="skills-header">

        <p>My Technical Skills</p>

        <h1>
          Skills & <span>Technologies</span>
        </h1>

        <p className="skills-description">
          Technologies and tools I use to build responsive,
          user-friendly and functional web applications.
        </p>

      </div>

      <div className="skills-grid">

        {skills.map((skill) => (
          <div
            className="skill-box"
            key={skill.name}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h2>{skill.name}</h2>

            <p>{skill.level}</p>

          </div>
        ))}

      </div>

      <div className="skill-category">

        <h2>Frontend Development</h2>

        <div className="skill-list">

          <div className="skill-row">
            <div>
              <span>HTML & CSS</span>
              <small>Comfortable</small>
            </div>

            <div className="skill-line">
              <span className="line-fill html"></span>
            </div>
          </div>

          <div className="skill-row">
            <div>
              <span>JavaScript</span>
              <small>Intermediate</small>
            </div>

            <div className="skill-line">
              <span className="line-fill javascript"></span>
            </div>
          </div>

          <div className="skill-row">
            <div>
              <span>React.js</span>
              <small>Intermediate</small>
            </div>

            <div className="skill-line">
              <span className="line-fill react"></span>
            </div>
          </div>

          <div className="skill-row">
            <div>
              <span>Bootstrap</span>
              <small>Comfortable</small>
            </div>

            <div className="skill-line">
              <span className="line-fill bootstrap"></span>
            </div>
          </div>

        </div>

      </div>

      <div className="tools-section">

        <h2>Tools & Technologies</h2>

        <div className="tools">
          <span>Git</span>
          <span>GitHub</span>
          <span>VS Code</span>
          <span>MySQL</span>
          <span>Vercel</span>
        </div>

      </div>

    </section>
  );
}

export default Skills;
