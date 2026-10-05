import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import profileImg from "../assets/about-image.jpg";
import "../index.css";

const points = [
  "Fast loading",
  "Idea to launch",
  "Built to grow",
  "Backend included",
];

const AboutMe = ({ onShowCV }) => {
  return (
    <section id="about" className="am-section">
      <div className="am-inner">
        {/* Photo */}
        <motion.figure
          className="am-photo"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <img src={profileImg} alt="Mehreen Khalid" />
          <span className="am-pill">
            <i className="am-dot" />
            Available for projects
          </span>
        </motion.figure>

        {/* Text */}
        <motion.div
          className="am-text"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="am-label">About Me</span>

          <h2 className="am-heading">
            Websites that look sharp and{" "}
            <span className="am-accent">bring in customers.</span>
          </h2>

          <p className="am-role">Mehreen Khalid · React.js &amp; Website Developer</p>

          <p className="am-para">
            I'm a React.js and website developer from Pakistan. I take your
            project from idea to launch — design, front end, back end and
            deployment — so you work with one person, not a team.
          </p>

          <ul className="am-points">
            {points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>

          <div className="am-actions">
            <a href="#contact" className="am-btn">
              Start a Project <ArrowRight size={16} />
            </a>
            <button type="button" className="am-link" onClick={onShowCV}>
              <FileText size={16} /> View CV
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;