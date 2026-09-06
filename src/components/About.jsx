import React, { useEffect, useRef, useState } from "react";
import profileImg from "../assets/about-image.jpg";
import "../index.css";
import { Code2, Zap, Smartphone, Server, FileText, Quote } from "lucide-react";

const AboutMe = ({ onShowCV }) => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about-section" ref={sectionRef}>
      <div className="about-container">
        <div className="about-grid">

          {/* LEFT — IMAGE */}
          <div className={`about-image-wrapper about-reveal ${visible ? "about-reveal-in" : ""}`}>
            <div className="about-image-glow" />
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
          <div className={`about-content about-reveal about-reveal-delay ${visible ? "about-reveal-in" : ""}`}>
            <span className="about-label">About Me</span>
            <h2 className="about-heading">Hello, I'm Mehreen</h2>

            <h3 className="about-greeting">React.js &amp; Website Developer</h3>

            <div className="about-text-panel">
              <Quote className="about-quote-icon" size={22} />
              <p className="about-description">
                I'm <span className="about-highlight">Mehreen Khalid</span>, a
                React.js developer based in Pakistan. I build modern
                websites — landing pages, business sites, ecommerce
                stores, and web apps — focused on speed, clean structure,
                and interfaces that work well on any screen. I also build
                the backend when a project needs it, using Node.js,
                Express, MongoDB, or Firebase — taking a project from idea
                to finished product, end to end.
              </p>
            </div>

            <div className="about-capabilities">
              <div className="about-cap-item">
                <Code2 size={16} />
                <span>Clean Architecture</span>
              </div>
              <div className="about-cap-item">
                <Zap size={16} />
                <span>Performance First</span>
              </div>
              <div className="about-cap-item">
                <Smartphone size={16} />
                <span>Fully Responsive</span>
              </div>
              <div className="about-cap-item">
                <Server size={16} />
                <span>Full-Stack Capable</span>
              </div>
            </div>

            <div className="about-btn-wrapper">
              <button onClick={onShowCV} className="about-btn">
                Show CV <FileText size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;