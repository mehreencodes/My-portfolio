import React, { useEffect, useRef, useState } from "react";
import "../index.css";

/* Primary — React.js & Website Development */
const frontendSkills = [
  { label: "React.js",          pct: 90 },
  { label: "JavaScript",        pct: 88 },
  { label: "HTML5",             pct: 95 },
  { label: "CSS3",              pct: 92 },
  { label: "Tailwind CSS",      pct: 88 },
  { label: "Bootstrap",         pct: 85 },
  { label: "Responsive Design", pct: 95 },
  { label: "UI/UX",             pct: 82 },
];

/* Secondary — Full-Stack capability */
const backendSkills = [
  { label: "Node.js",     pct: 80 },
  { label: "Express.js",  pct: 78 },
  { label: "MongoDB",     pct: 78 },
  { label: "REST APIs",   pct: 80 },
];

/* Tools & workflow */
const toolSkills = [
  { label: "Git",    pct: 85 },
  { label: "GitHub", pct: 88 },
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

/* ── Skill group row (label + grid) ── */
const SkillGroup = ({ title, skills, animate, startDelay }) => (
  <>
    <p className="row-label">{title}</p>
    <div className="skills-grid">
      {skills.map((skill, i) => (
        <SkillCard
          key={skill.label}
          label={skill.label}
          pct={skill.pct}
          animate={animate}
          delay={startDelay + i * 100}
        />
      ))}
    </div>
  </>
);

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

      {/* Primary: React.js & Website Development */}
      <SkillGroup
        title="Frontend & React Development"
        skills={frontendSkills}
        animate={animate}
        startDelay={150}
      />

      {/* Secondary: Full-Stack capability */}
      <SkillGroup
        title="Full-Stack & Backend"
        skills={backendSkills}
        animate={animate}
        startDelay={150 + frontendSkills.length * 100}
      />

      {/* Tools */}
      <SkillGroup
        title="Tools & Workflow"
        skills={toolSkills}
        animate={animate}
        startDelay={150 + (frontendSkills.length + backendSkills.length) * 100}
      />
    </section>
  );
};

export default Skills;