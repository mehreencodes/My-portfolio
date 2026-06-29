





import React, { useEffect, useRef, useState } from "react";
import "../index.css";


/* ── All skills flat — each gets its own card ── */
const developerSkills = [
  { label: "HTML",        pct: 95 },
  { label: "CSS",         pct: 90 },
  { label: "JavaScript",  pct: 80 },
  { label: "React",       pct: 85 },
  { label: "MongoDB",     pct: 75 },
  { label: "Github",         pct: 80 },
  { label: "Layouts",     pct: 88 },
  { label: "Responsive",  pct: 92 },
  { label: "UI/UX",       pct: 78 },
  { label: "Bootstrap",   pct: 85 },

];

const writerSkills = [
  { label: "ContentWriting",     pct: 83 },
  { label: "SEO Blogs",         pct: 80 },
  { label: "Copywriting", pct: 78 },
    { label: "MS Word",     pct: 90 },
  { label: "Claude",      pct: 85 },
    { label: "ChatGpt",      pct: 90 },

];

/* ── Single skill card ── */
const SkillCard = ({ label, pct, animate, delay }) => {
  const [width, setWidth] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (!animate) return;
    const t = setTimeout(() => {
      setWidth(pct);
      setTimeout(() => setLoaded(true), 1300);
    }, delay);
    return () => clearTimeout(t);
  }, [animate, pct, delay]);

  return (
    <div className="skill-card">
      {/* top row: label left, badge right */}
      <div className="card-top">
        <span className="card-label">{label}</span>
        <span className={`card-badge${loaded ? " badge-visible" : ""}`}>
          {pct}%
        </span>
      </div>

      {/* progress track */}
      <div className="bar-track">
        <div
          className={`bar-fill${loaded ? " loaded" : ""}`}
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

/* ── Main section ── */
const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
      <section id="skills" className="skills-section" ref={sectionRef}>
      <div className="skills-heading">
        <span className="skills-label">Expertise</span>
        <h2 className="skills-title">My Skills</h2>
        <p className="skills-support-text">What I'm good at</p>
      </div>

      {/* As a Developer */}
      <p className="row-label">As a Developer</p>
      <div className="skills-grid">
        {developerSkills.map((skill, i) => (
          <SkillCard
            key={i}
            label={skill.label}
            pct={skill.pct}
            animate={animate}
            delay={150 + i * 100}
          />
        ))}
      </div>

      {/* As a Writer */}
      <p className="row-label" style={{ marginTop: "40px" }}>As a Writer & Tool User</p>
      <div className="skills-grid">
        {writerSkills.map((skill, i) => (
          <SkillCard
            key={i}
            label={skill.label}
            pct={skill.pct}
            animate={animate}
            delay={200 + i * 100}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;