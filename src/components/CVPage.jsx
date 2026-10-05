import React, { useEffect } from "react";
import {
  FaDownload,
  FaArrowLeft,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
  FaExternalLinkAlt,
} from "react-icons/fa";
import CV from "../assets/Mehreen_Khalid_CV.pdf";
import "../index.css";

const contact = [
  { icon: <FaEnvelope />, text: "webdevhub67@gmail.com", href: "mailto:webdevhub67@gmail.com" },
  { icon: <FaLinkedin />, text: "mehreenkhaliddev", href: "https://www.linkedin.com/in/mehreenkhaliddev/" },
  { icon: <FaGithub />, text: "mehreencodes", href: "https://github.com/mehreencodes" },
  { icon: <FaMapMarkerAlt />, text: "Jhelum, Punjab, Pakistan", href: null },
];

const skills = [
  { label: "Frontend", items: "React.js, JavaScript, HTML & CSS, Tailwind CSS, Responsive Design" },
  { label: "Backend", items: "Node.js, Express.js, MongoDB, Firebase" },
  { label: "Tools", items: "Git & GitHub, Vite, Vercel" },
];

const projects = [
  {
    title: "SafePay",
    type: "Full Stack",
    desc: "Checkout built on the Safepay payment gateway, with server-side payment handling.",
    tech: "Next.js · React · Node.js (API routes) · Safepay API",
    live: "https://safepay-payment-beta.vercel.app/checkout",
    github: "https://github.com/mehreencodes/safepay-payment",
  },
  {
    title: "FormCraft Pro",
    type: "Full Stack",
    desc: "Drag-and-drop form builder with real-time database syncing.",
    tech: "React · Node.js · Express · MongoDB",
    live: "https://drag-form-builder-production-242b.up.railway.app/",
    github: "https://github.com/mehreencodes/drag-form-builder",
  },
  {
    title: "Resume Builder",
    type: "Web App",
    desc: "Live preview with instant PDF export.",
    tech: "React · JavaScript · HTML · CSS",
    live: "https://resume-builder-react-pied.vercel.app/",
    github: "https://github.com/mehreencodes/Resume-builder-react",
  },
  {
    title: "TerraThread Store",
    type: "E-Commerce",
    desc: "Responsive store with product browsing, cart and checkout flow.",
    tech: "React · JavaScript · HTML · CSS",
    live: "https://terrathread-store.vercel.app/",
    github: "https://github.com/mehreencodes/terrathread-store",
  },
];

// most recent first
const education = [
  { period: "2025 – Present", title: "Self-Taught", sub: "React.js & Web Development" },
  { period: "2021 – 2023", title: "BA, History & Political Science", sub: "University of the Punjab" },
  { period: "2019 – 2021", title: "ICS, Computer Science", sub: "Govt. Degree College for Women, Dina · Grade A+" },
];

const Section = ({ n, title, children }) => (
  <section className="cvx-sec">
    <h2 className="cvx-label">
      <span>{n}</span> {title}
    </h2>
    <div className="cvx-body">{children}</div>
  </section>
);

const CVPage = ({ onClose }) => {
  // start at the top; Escape closes the page
  useEffect(() => {
    window.scrollTo(0, 0);
    const onKey = (e) => {
      if (e.key === "Escape") onClose?.();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="cvx-wrap">
      <div className="cvx-inner">
        {/* top bar */}
        <div className="cvx-bar">
          <button type="button" onClick={onClose} className="cvx-back">
            <FaArrowLeft size={13} /> Back to Portfolio
          </button>
          <a href={CV} download className="cvx-download">
            <FaDownload size={13} /> Download CV
          </a>
        </div>

        <article className="cvx-doc">
          {/* header */}
          <header className="cvx-head">
            <div className="cvx-id">
              <span className="cvx-avatar">MK</span>
              <div>
                <h1 className="cvx-name">
                  Mehreen <span className="cvx-accent">Khalid</span>
                </h1>
                <p className="cvx-role">React.js &amp; Website Developer</p>
              </div>
            </div>

            <ul className="cvx-contact">
              {contact.map((c) => (
                <li key={c.text}>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {c.icon}
                      {c.text}
                    </a>
                  ) : (
                    <span>
                      {c.icon}
                      {c.text}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </header>

          <Section n="01" title="Profile">
            <p className="cvx-profile">
              React.js and website developer from Pakistan. I build fast,
              responsive websites and web apps, and handle the backend with
              Node.js, Express and MongoDB when a project needs it.
            </p>
          </Section>

          <Section n="02" title="Skills">
            <dl className="cvx-skills">
              {skills.map((s) => (
                <div key={s.label}>
                  <dt>{s.label}</dt>
                  <dd>{s.items}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section n="03" title="Projects">
            <div className="cvx-projects">
              {projects.map((p) => (
                <div className="cvx-proj" key={p.title}>
                  <div className="cvx-proj-top">
                    <h3>{p.title}</h3>
                    <span className="cvx-tag">{p.type}</span>
                  </div>
                  <p className="cvx-desc">{p.desc}</p>
                  <p className="cvx-tech">{p.tech}</p>
                  <div className="cvx-links">
                    <a href={p.live} target="_blank" rel="noopener noreferrer">
                      Live <FaExternalLinkAlt size={10} />
                    </a>
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={12} /> Code
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section n="04" title="Education">
            <ul className="cvx-edu">
              {education.map((e) => (
                <li key={e.title}>
                  <span className="cvx-period">{e.period}</span>
                  <div>
                    <strong>{e.title}</strong>
                    <span>{e.sub}</span>
                  </div>
                </li>
              ))}
            </ul>
          </Section>
        </article>
      </div>
    </div>
  );
};

export default CVPage;