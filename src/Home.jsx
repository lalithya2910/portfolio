
import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="hello">
          Hello, I'm
        </p>

        <h1>Lalithya</h1>

        <br />

        <h2>Frontend Developer</h2>

        <p className="hero-text">
          I build responsive and user-friendly web applications
          using React, JavaScript, HTML, CSS and Bootstrap.
        </p>

        <div className="hero-buttons">

          <Link to="/projects" className="primary-btn">
            View Projects
          </Link>

          <Link to="/contact" className="secondary-btn">
            Contact Me
          </Link>

        </div>

        <div className="social-icons">

          <a
            href="https://github.com/lalithya2910"
            target="_blank"
            rel="noopener noreferrer"
          >
            ◉
          </a>

          <a
            href="https://www.linkedin.com/in/lalithya-vanacharla-49a0a5331"
            target="_blank"
            rel="noopener noreferrer"
          >
            in
          </a>

          <a href="mailto:vanacharlalalalithya@gmail.com">
            ✉
          </a>

        </div>

      </div>

      <div className="hero-image">

        <div className="glow-circle"></div>

       
        <img
         src={import.meta.env.VITE_CLOUDINARY_IMAGE_URL}
         alt="Lalithya"
        />

      </div>

    </section>
  );
}

export default Home;
