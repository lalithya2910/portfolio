import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        Lalithya<span>.</span>
      </div>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

      <a
        href="/lalithya resume.pdf"
        download="lalithya resume.pdf"
        className="resume-btn"
      >
        Download Resume
      </a>

    </nav>
  );
}

export default Navbar;
