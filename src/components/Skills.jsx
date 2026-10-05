import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { Smartphone, Palette, Plug } from "lucide-react";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import {
  SiReact,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiGithub,
  SiNpm,
  SiVite,
  SiVercel,
  SiNetlify,
  SiRailway,
} from "react-icons/si";

// EDIT — keep only skills you truly use
const tabs = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "React.js", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
   { name: "HTML5", icon: FaHtml5 },
{ name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "Responsive Design", icon: Smartphone },
      { name: "UI/UX", icon: Palette },
    ],
  },
  {
    id: "backend",
    label: "Backend & Database",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Firebase", icon: SiFirebase },
      { name: "REST APIs", icon: Plug },
    ],
  },
 {
  id: "workflow",
  label: "Workflow",
  skills: [
    { name: "Git", icon: SiGit },
    { name: "GitHub", icon: SiGithub },
    { name: "VS Code", icon: VscVscode },
    { name: "npm", icon: SiNpm },
    { name: "Vite", icon: SiVite },
    { name: "Vercel", icon: SiVercel },
    { name: "Netlify", icon: SiNetlify },
    { name: "Railway", icon: SiRailway },
  ],
},
];

const Skills = () => {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);
  const tabRefs = useRef([]);

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

  // keyboard: arrow keys move between tabs
  const onKeyDown = (e) => {
    let next = null;
    if (e.key === "ArrowRight") next = (active + 1) % tabs.length;
    if (e.key === "ArrowLeft") next = (active - 1 + tabs.length) % tabs.length;
    if (next === null) return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <section id="skills" className="sk-section" ref={sectionRef}>
      <div className={`sk-inner ${visible ? "sk-in" : ""}`}>
        <header className="sk-head">
          <span className="sk-label">Expertise</span>
          <h2 className="sk-title">
            My <span className="sk-accent">Skills</span>
          </h2>
        </header>

        {/* Tabs */}
        <div
          className="sk-tabs"
          role="tablist"
          aria-label="Skill categories"
          onKeyDown={onKeyDown}
        >
          {tabs.map((t, i) => (
            <button
              key={t.id}
              ref={(el) => (tabRefs.current[i] = el)}
              id={`sk-tab-${t.id}`}
              role="tab"
              type="button"
              aria-selected={active === i}
              aria-controls={`sk-panel-${t.id}`}
              tabIndex={active === i ? 0 : -1}
              className={`sk-tab ${active === i ? "active" : ""}`}
              onClick={() => setActive(i)}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Panels share one grid cell, so height never jumps between tabs */}
        <div className="sk-stage">
          {tabs.map((t, i) => (
            <div
              key={t.id}
              id={`sk-panel-${t.id}`}
              role="tabpanel"
              aria-labelledby={`sk-tab-${t.id}`}
              aria-hidden={active !== i}
              className={`sk-panel ${active === i ? "show" : ""}`}
            >
              {t.skills.map(({ name, icon: Icon }, idx) => (
                <span className="sk-pill" key={name} style={{ "--i": idx }}>
                  <Icon size={18} />
                  {name}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;