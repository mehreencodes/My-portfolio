import React from "react";
import { motion } from "framer-motion";
import "../index.css";

const standards = [
  {
    n: "01",
    title: "Zero-CLS & Speed Priority",
    line: "Nothing jumps. Nothing waits.",
    // proof: "lazy sections · fixed-height panels",
       proof: "lazy sections · fixed panels",
    viz: "cls",
  },
  {
    n: "02",
    title: "Modular React Architecture",
    line: "One component, one job.",
    proof: "data-driven sections",
    viz: "modular",
  },
  {
    n: "03",
    title: "Mobile-First UX Strategy",
    line: "Small screen first, then scale up.",
    proof: "keyboard focus · reduced-motion",
    viz: "mobile",
  },
];

const COMPONENTS = ["<Hero />", "<Services />", "<Skills />"];
const DEVICES = ["mobile", "tablet", "desktop"];

const Viz = ({ type }) => {
  if (type === "cls") {
    return (
      <div className="sg-viz sg-viz-cls" aria-hidden="true">
        <span className="sg-sk sg-sk-bar" />
        <div className="sg-slot">
          <span>reserved space</span>
        </div>
        <span className="sg-sk sg-sk-line" />
        <span className="sg-sk sg-sk-line short" />
      </div>
    );
  }
  if (type === "modular") {
    return (
      <div className="sg-viz sg-viz-mod" aria-hidden="true">
        {COMPONENTS.map((c, i) => (
          <span key={c} className="sg-chip" style={{ "--i": i }}>
            {c}
          </span>
        ))}
      </div>
    );
  }
  return (
    <div className="sg-viz sg-viz-bp" aria-hidden="true">
      {DEVICES.map((d, i) => (
        <div className="sg-bp" key={d}>
          <span className={`sg-dev ${d} ${i === 0 ? "on" : ""}`} />
          <em className={i === 0 ? "on" : ""}>{d}</em>
        </div>
      ))}
    </div>
  );
};

const EngineeringStandards = () => {
  // mouse-follow spotlight (same effect as the Services cards)
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <section id="standards" className="sg-section" aria-labelledby="sg-title">
      <div className="sg-inner">
        <header className="sg-head">
          <span className="sg-label">Engineering Standards</span>
          <h2 id="sg-title" className="sg-title">
            How I <span className="sg-accent">Code</span>
          </h2>
        </header>

        <div className="sg-grid">
          {standards.map((s, i) => (
            <motion.article
              key={s.n}
              className="sg-card"
              onMouseMove={onMove}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <span className="sg-num">{s.n} /</span>
              <Viz type={s.viz} />
              <h3 className="sg-card-title">{s.title}</h3>
              <p className="sg-line">{s.line}</p>
              <p className="sg-proof">
                <span>proof /</span> {s.proof}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngineeringStandards;