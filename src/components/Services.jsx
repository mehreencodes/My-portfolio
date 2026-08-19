import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaServer } from "react-icons/fa";
import "../index.css";

const services = [
  {
    icon: <FaCode />,
    title: "Website Development",
    desc: "Custom websites built from scratch with React — fast, responsive, and easy to maintain.",
  },
  {
    icon: <FaPaintBrush />,
    title: "UI/UX Design",
    desc: "Clean, intuitive interfaces designed around how users actually think and navigate.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive & Mobile-Ready",
    desc: "Every project works and looks right on phones, tablets, and desktops — no exceptions.",
  },
  {
    icon: <FaServer />,
    title: "Full Stack Web Apps",
    desc: "Need a working backend too? I connect the database, API, and frontend into one complete app.",
    badge: "Add-on",
  },
];

const Services = () => {
  return (
    <section id="services" className="svc-section">
      <div className="svc-heading">
        <span className="svc-label">Services</span>
        <h2 className="svc-title">What I Offer</h2>
        <p className="svc-subtitle">
          Practical, reliable web development — from a single landing page to a full application.
        </p>
      </div>

      <div className="svc-grid">
        {services.map((s, i) => (
          <div key={i} className="svc-card">
            <span className="svc-num">{String(i + 1).padStart(2, "0")}</span>
            {s.badge && <span className="svc-badge">{s.badge}</span>}
            <div className="svc-icon">{s.icon}</div>
            <h3 className="svc-card-title">{s.title}</h3>
            <p className="svc-card-desc">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;