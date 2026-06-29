
import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const educationData = [
  {
    institute: "Govt. Degree College for Women, Dina",
    degree: "ICS — Computer Science",
    duration: "2019 – 2021",
    grade: "A+",
    tag: "Intermediate",
    desc: "Built a strong foundation in computer science, mathematics, and problem-solving.",
  },
  {
    institute: "University of the Punjab",
    degree: "Bachelor of Arts — History & Political Science",
    duration: "2021 – 2023",
    grade: "B",
    tag: "Bachelors",
    desc: "Developed sharp analytical, research, and writing skills through humanities study.",
  },
  {
    institute: "Self Learning",
    degree: "Frontend Development",
    duration: "2024 – Present",
    grade: "Ongoing",
    tag: "Self-Taught",
    desc: "Building real-world projects with React, JavaScript, CSS, and modern UI practices.",
  },
];

const Education = () => {
  return (
    <section id="education" className="edu-section">

      {/* heading */}
      <div className="edu-heading">
        <span className="edu-label">Journey</span>
        <h2 className="edu-title">Education</h2>
        <p className="edu-subtitle">Formal academics & self-driven learning</p>
      </div>

      <div className="edu-container">

        {/* center line */}
        <div className="edu-line" />

        {educationData.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`edu-card ${isLeft ? "edu-left" : "edu-right"}`}
              initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
            >
              {/* connector dot */}
              <div className="edu-dot">
                <span>{index + 1}</span>
                <div className="edu-dot-ring" />
              </div>

              {/* card */}
              <div className="edu-card-inner">

                {/* top row */}
                <div className="edu-card-top">
                  <span className="edu-tag">{edu.tag}</span>
                  <span className="edu-duration">{edu.duration}</span>
                </div>

                <h3 className="edu-institute">{edu.institute}</h3>
                <p className="edu-degree">{edu.degree}</p>
                <p className="edu-desc">{edu.desc}</p>

                {/* grade pill */}
                <div className="edu-grade">
                  <span className="edu-grade-label">Grade</span>
                  <span className="edu-grade-val">{edu.grade}</span>
                </div>

              </div>
            </motion.div>
          );
        })}

      </div>
    </section>
  );
};

export default Education;