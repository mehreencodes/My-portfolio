import React from "react";
import {
  FaDownload,
  FaArrowLeft,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../index.css";
import CV from "../assets/Mehreen_Khalid_CV.pdf";

const contactInfo = [
  { icon: <FaEnvelope size={13} />, text: "khalidmehri65@gmail.com", href: "mailto:khalidmehri65@gmail.com" },
  { icon: <FaLinkedin size={13} />, text: "mehreenkhaliddev", href: "https://www.linkedin.com/in/mehreenkhaliddev/" },
  { icon: <FaGithub size={13} />, text: "mehreencodes", href: "https://github.com/mehreencodes" },
  { icon: <FaMapMarkerAlt size={13} />, text: "Jhelum, Punjab, Pakistan", href: null },
];

// Frontend & React skills first (primary), backend/full-stack after (secondary)
const skills = [
  "React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS",
  "Bootstrap", "Responsive Design", "UI / UX",
  "Node.js", "Express.js", "MongoDB", "REST APIs",
  "Git & GitHub",
];

const education = [
  { period: "2024 – Present", title: "Self-Taught — React.js & Modern Website Development", sub: "Building landing pages, business sites, and web apps with React — plus Node.js, Express, and MongoDB for full-stack projects." },
  { period: "2019 – 2021", title: "Govt. Degree College for Women, Dina — ICS (Computer Science)", sub: "Grade: A+" },
  { period: "2021 – 2023", title: "University of the Punjab — BA, History & Political Science", sub: "Grade: B" },
];

// React/website projects first, full-stack projects after — matches primary/secondary positioning
const projects = [
  { title: "MediCare", tag: "React App", desc: "Doctor search and appointment booking with filters that actually narrow results fast." },
  { title: "TerraThread Store", tag: "E-Commerce", desc: "Full storefront UI — product grid, cart, and checkout flow, fully responsive." },
  { title: "Resume Builder", tag: "React App", desc: "Live preview meets instant PDF export — no page reloads, no lost formatting." },
  { title: "SafePay", tag: "Full Stack App", desc: "Checkout that handles failed payments and retries gracefully, not just the happy path." },
  { title: "Quick Khata", tag: "Invoicing App", desc: "Offline-first ledger for shopkeepers — works without internet, syncs when it's back." },
  { title: "FormCraft Pro", tag: "Full Stack App", desc: "Drag-and-drop form builder synced to a live database — every edit saves in real time." },
];

const CVPage = ({ onClose }) => {
  return (
    <div className="cvpage-wrap">

      {/* top bar */}
      <div className="cvpage-topbar">
        <button onClick={onClose} className="cvpage-back">
          <FaArrowLeft size={13} /> Back to Portfolio
        </button>
        <a href={CV} download className="cvpage-download">
          <FaDownload size={13} /> Download CV
        </a>
      </div>

      {/* single-column resume document */}
      <div className="cvpage-doc">

        {/* header */}
        <div className="cvpage-header">
          <h1 className="cvpage-name">Mehreen Khalid</h1>
          <span className="cvpage-role-pill">React.js &amp; Website Developer</span>

          <div className="cvpage-contact-row">
            {contactInfo.map((item, i) =>
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="cvpage-contact-chip"
                >
                  {item.icon} {item.text}
                </a>
              ) : (
                <span key={i} className="cvpage-contact-chip">
                  {item.icon} {item.text}
                </span>
              )
            )}
          </div>
        </div>

        {/* About */}
        <div className="cvpage-section">
          <h2 className="cvpage-section-title">About Me</h2>
          <p className="cvpage-about-text">
            React.js developer based in Pakistan who builds modern websites —
            landing pages, business sites, ecommerce stores, and web apps —
            with a focus on speed, clean structure, and interfaces that feel
            effortless to use on any screen. When a project needs backend
            work too, I build that out as well using Node.js, Express,
            MongoDB, or Firebase — taking a project from idea to working
            product, end to end.
          </p>
        </div>

        {/* Skills */}
        <div className="cvpage-section">
          <h2 className="cvpage-section-title">Skills</h2>
          <div className="cvpage-skill-tags">
            {skills.map((s, i) => (
              <span key={i} className="cvpage-skill-tag">{s}</span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="cvpage-section">
          <h2 className="cvpage-section-title">Education</h2>
          {education.map((e, i) => (
            <div key={i} className="cvpage-edu-row">
              <span className="cvpage-edu-period">{e.period}</span>
              <div className="cvpage-edu-text">
                <span className="cvpage-edu-title">{e.title}</span>
                <span className="cvpage-edu-sub">{e.sub}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="cvpage-section">
          <h2 className="cvpage-section-title">Projects</h2>
          <div className="cvpage-project-grid">
            {projects.map((p, i) => (
              <div key={i} className="cvpage-project-item">
                <div className="cvpage-project-top">
                  <span className="cvpage-project-title">{p.title}</span>
                  <span className="cvpage-project-tag">{p.tag}</span>
                </div>
                <p className="cvpage-project-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Reference */}
        <div className="cvpage-section">
          <h2 className="cvpage-section-title">Reference</h2>
          <p className="cvpage-about-text">Available upon request.</p>
        </div>

      </div>
    </div>
  );
};

export default CVPage;