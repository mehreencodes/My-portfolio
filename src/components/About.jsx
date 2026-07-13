

import React from "react";
import profileImg from "../assets/about-image.jpg";
import "../index.css";
import CV from "../assets/Mehreen_Khalid_CV.pdf";

const AboutMe = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">

          {/* LEFT — IMAGE */}
          <div className="about-image-wrapper">
            <div className="about-image-card">
              <img src={profileImg} alt="Mehreen Khalid" />
              <div className="avail-badge">
                <span className="dot"></span>
                <span className="avail-txt">Open to Work</span>
              </div>
              <div className="projects-badge">
                 <span className="projects-num">Hands-on</span>
  <span className="projects-txt">Web Projects Built</span>
              </div>
            </div>
          </div>

          {/* RIGHT — TEXT */}
          <div className="about-content">
            <span className="about-label">About Me</span>
            <h2 className="about-heading">Hello, I'm Mehreen</h2>

<h3 className="about-greeting">React.js & Full Stack Developer</h3>

<p className="about-description">
  I'm <span className="about-highlight">Mehreen Khalid</span>, a React.js & Full Stack
  Developer from Pakistan passionate about building fast, scalable, and
  responsive websites and web applications. I focus on clean architecture,
  maintainable code, and intuitive user experiences that perform seamlessly
  across modern devices. Every project I build is designed with performance,
  usability, and long-term scalability in mind.
  <span className="about-tagline"> Clean Code. Fast Performance. Built to Scale.</span>
</p>
            <div className="about-btn-wrapper">
              <a href={CV} download className="about-btn">Download CV</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;