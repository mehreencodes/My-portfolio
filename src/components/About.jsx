

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
            <h3 className="about-greeting">Frontend Developer & Creative Writer</h3>
   <p className="about-description">
  I'm Mehreen Khalid — a self-taught Frontend Developer & Creative Writer
  from Pakistan. I build fast, responsive and visually polished websites
  using <span className="about-highlight">React, CSS and modern UI practices</span> that
  don't just look good — they convert visitors into clients.
  Beyond code, I write <span className="about-highlight">SEO-friendly content</span> that
  speaks directly to the audience. Clean code. Sharp copy.
  <span className="about-tagline"> Simple. Intentional. Impactful.</span>
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