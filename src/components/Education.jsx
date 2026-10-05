import React from "react";
import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Code2 } from "lucide-react";
import "../index.css";

// Chronological: oldest → current
const educationData = [
  {
    icon: BookOpen,
    institute: "Govt. Degree College for Women, Dina",
    degree: "ICS — Computer Science",
    duration: "2019 – 2021",
    grade: "A+",
    showGrade: true,
    tag: "Intermediate",
    desc: "Built a strong foundation in computer science, mathematics, and problem-solving.",
  },
  {
    icon: GraduationCap,
    institute: "University of the Punjab",
    degree: "Bachelor of Arts — History & Political Science",
    duration: "2021 – 2023",
    grade: "B",
    showGrade: true,
    tag: "Bachelors",
    desc: "Developed sharp analytical, research, and writing skills through humanities study.",
  },
  {
    icon: Code2,
    institute: "Self-Taught",
    degree: "React.js & Modern Website Development",
    duration: "2025 – Present",
    tag: "Current",
    current: true,
    desc: "Learning by building: React, JavaScript and modern web development, plus Node.js, Express and MongoDB for full-stack work.",
  },
];

const Education = () => {
  return (
    <section id="education" className="ed-section">
      <div className="ed-inner">
        <header className="ed-head">
          <span className="ed-label">Education</span>
          <h2 className="ed-title">
            My <span className="ed-accent">Journey</span>
          </h2>
        </header>

        <div className="ed-track">
          {educationData.map((e, i) => {
            const Icon = e.icon;
            return (
              <motion.article
                key={e.institute}
                className={`ed-card ${e.current ? "now" : ""}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
              >
                <div className="ed-node">
                  <Icon size={18} />
                  {e.current && <span className="ed-pulse" />}
                </div>

                <div className="ed-body">
                  <div className="ed-top">
                    <span className="ed-tag">{e.tag}</span>
                    <span className="ed-dur">{e.duration}</span>
                  </div>

                  <h3 className="ed-inst">{e.institute}</h3>
                  <p className="ed-degree">{e.degree}</p>
                  <p className="ed-desc">{e.desc}</p>

                  {e.showGrade && e.grade && (
                    <span className="ed-grade">
                      <small>Grade</small> {e.grade}
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Education;