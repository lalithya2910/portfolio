import "./About.css";

function About() {
  return (
    <section className="about-page">

      <div className="about-header">
        <p>Get To Know Me</p>
        <h1>
          About <span>Me</span>
        </h1>
      </div>

      <div className="about-container">

        <div className="about-content">

          <h2>Hello! I'm Lalithya 👋</h2>

          <p>
            I am an aspiring Frontend Developer passionate about
            creating responsive, user-friendly and visually appealing
            web applications.
          </p>

          <p>
            I enjoy working with modern web technologies and turning
            ideas into simple and functional digital experiences.
            I am continuously improving my technical skills by
            building real-world projects.
          </p>

          <div className="about-info">

            <div>
              <span>Name</span>
              <strong>Lalithya</strong>
            </div>

            <div>
              <span>Role</span>
              <strong>Frontend Developer</strong>
            </div>

            <div>
              <span>Education</span>
              <strong>B.Tech - IT</strong>
            </div>

            <div>
              <span>Location</span>
              <strong>India</strong>
            </div>

          </div>


        </div>

      </div>

      <div className="career-section">

        <div className="career-card">

          <div className="career-icon">
            🎯
          </div>

          <div>
            <h2>My Career Goal</h2>

            <p>
              My goal is to become a skilled software developer and
              build meaningful applications that solve real-world
              problems. I am interested in learning new technologies
              and continuously improving my development skills.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;