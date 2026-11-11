import "./Project.css";

function Projects() {
  const projects = [
    {
      title: "Librify - Library Management System",
      description:
        "A web-based library management system developed using React.js, HTML, CSS and Bootstrap. It helps manage books, members, book issuing, returning and library transactions.",
      technologies: ["React.js", "HTML", "CSS", "Bootstrap"],
      image: "/back image.jpeg",
      live: "https://lms-project-zeta-rouge.vercel.app/",
      github: "https://github.com/lalithya2910/lms-project",
    },
    {
      title: "Heart disease Prediction",
      description:
        "A machine learning based system to predict the presence of heart disease using patient medical data ",
      technologies: ["Python", "Streamlit", "Numpy", "Pandas","Scikit-learn","pickel"],
      image: "/heart-disease-prediction.png",
      live: "https://heartdiseaseprediction-cavlnzs85km4r3ehipdykg.streamlit.app/",
      github: "https://github.com/lalithya2910/heartdiseaseprediction",
    },
    {
      title: "Scholarship Eligibility and Allocation Platform",
      description:
        "The Scholarship Eligibility and Fund Allocation Platform is a web-based application developed using Python Flask and MySQL. It helps students apply for scholarships online by submitting their academic, financial, and supporting document details. Administrators can manage scholarships, review applications, verify documents, and allocate scholarship ",
      technologies: ["Python", "Flask", "Bootstrap", "jinja","html","css","MySQL"],
      image: "scholarship project .jpeg",
      live: "https://scholarshipplatform.vercel.app/",
      github: "https://github.com/lalithya2910/scholarship_platform",
    },

  ];

  return (
    <section className="projects-page">

      <div className="projects-header">

        <p>My Recent Work</p>

        <h1>
          My <span>Projects</span>
        </h1>

        <p className="projects-description">
          Here are some of the projects I have developed while
          learning and improving my web development skills.
        </p>

      </div>

      <div className="projects-grid">

        {projects.map((project) => (
          <div
            className="project-box"
            key={project.title}
          >

            <div className="project-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-content">

              <h2>{project.title}</h2>

              <p>{project.description}</p>

              <div className="technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="project-buttons">

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="live-btn"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-btn"
                >
                  GitHub
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Projects;
