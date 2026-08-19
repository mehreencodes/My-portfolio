import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../index.css";
import resumeImg    from "../assets/resume.jpg";
import ecoimg       from "../assets/cloth.png";
import mealimg      from "../assets/food.png";
import formimg      from "../assets/form.jpg";
import weatherimg   from "../assets/weather.jpg";
import Gradientimg  from "../assets/Gradient.png";
import neureimg     from "../assets/neure.jpg";
import dashboardimg from "../assets/dashboard.jpg";
import recipeimg    from "../assets/recipe.png";
// import expenseimg   from "../assets/expensetracker.png";
import medicareimg from "../assets/doctor.png"
import khataimg from "../assets/khata.jpg" 
import formcraftimg from  "../assets/drag-form.jpg" 
import safepayimg from "../assets/safepay.jpg"
import purplehourimg from "../assets/bts.jpg"

const featuredProjects = [
  {
    title: "Resume Builder",
    tag: "React App",
    description: "Live preview meets instant PDF export — no page reloads, no lost formatting.",
    image: resumeImg,
    live: "https://resume-builder-react-pied.vercel.app/",
    github: "https://github.com/mehreencodes/Resume-builder-react"
  },
  {
    title: "PurpleHour",
    tag: "React App",
    description: "An animated tribute experience — profiles, discography, and a world tour map with smooth transitions.",
    image: purplehourimg,
    live: "https://purple-hour-iota.vercel.app/",
    github: "https://github.com/mehreencodes/purple-hour"
  },
  {
    title: "MediCare",
    tag: "React App",
    description: "Doctor search and appointment booking with filters that actually narrow results fast.",
    image: medicareimg,
    live: "https://medi-care-healthcare-website.vercel.app/",
    github: "https://github.com/mehreencodes/MediCare-Healthcare-Website"
  },
  {
    title: "TerraThread Store",
    tag: "E-Commerce",
    description: "Full storefront UI — product grid, cart, and checkout flow, fully responsive.",
    image: ecoimg,
    live: "https://terrathread-store.vercel.app/",
    github: "https://github.com/mehreencodes/terrathread-store"
  },
  {
    title: "Dragon Bite",
    tag: "Recipe Site",
    description: "Recipe layouts built for scanning — ingredients and steps visible without endless scrolling.",
    image: mealimg,
    live: "https://chineesefood.vercel.app/",
    github: "https://github.com/mehreencodes/Chineesefood"
  },
  {
    title: "Quick Khata",
    tag: "Invoicing App",
    description: "Offline-first ledger for shopkeepers — works without internet, syncs when it's back.",
    image: khataimg,
    live: "https://khata-pro-gamma.vercel.app/",
    github: "https://github.com/mehreencodes/Khata-pro"
  },
  {
    title: "DashFlow Dashboard",
    tag: "Dashboard",
    description: "Admin dashboard with live charts — built to make data readable at a glance, not overwhelming.",
    image: dashboardimg,
    live: "https://saasdashboard154.netlify.app/",
    github: "https://github.com/mehreencodes/Dashboard"
  },
  {
    title: "SafePay",
    tag: "Full Stack App",
    description: "Checkout that handles failed payments and retries gracefully, not just the happy path.",
    image: safepayimg,
    live: "https://safepay-payment-beta.vercel.app/checkout",
    github: "https://github.com/mehreencodes/safepay-payment"
  },
  {
    title: "FormCraft Pro",
    tag: "Full Stack App",
    description: "Drag-and-drop form builder synced to a live database — every edit saves in real time.",
    image: formcraftimg,
    live: "https://drag-form-builder-production-242b.up.railway.app/",
    github: "https://github.com/mehreencodes/drag-form-builder"
  },
  // { title: "Expense Tracker", tag: "Finance App", description: "Track income, expenses & savings goals visually.", image: expenseimg, live: "https://declutterqueen.github.io/Expense-Tracker/", github: "https://github.com/mehreencodes/Expense-Tracker" },
];

const miniProjects = [
  {
    title: "Weather App",
    tag: "API App",
    description: "Real-time weather lookup with a clean, distraction-free search interface.",
    image: weatherimg,
    live: "https://declutterqueen.github.io/Weather-App/",
    github: "https://github.com/mehreencodes/Weather-App"
  },
  {
    title: "NeuraSpace",
    tag: "Interactive",
    description: "An experiment in motion — immersive animations built purely for visual polish.",
    image: neureimg,
    live: "https://neura-space-k3wjpoofn-declutterqueens-projects.vercel.app/",
    github: "https://github.com/mehreencodes/NeuraSpace"
  },
  {
    title: "Smart Contact Form",
    tag: "Form UI",
    description: "Validation and feedback that guide users instead of just blocking bad input.",
    image: formimg,
    live: "https://smart-contact-form-phi.vercel.app/",
    github: "https://github.com/mehreencodes/smart-contact-form"
  },
  {
    title: "Gradient Generator",
    tag: "CSS Tool",
    description: "Live gradient builder with one-click copy-to-clipboard CSS export.",
    image: Gradientimg,
    live: "https://declutterqueen.github.io/Gradient-generator/",
    github: "https://github.com/mehreencodes/Gradient-generator"
  },
  {
    title: "Recipe Finder",
    tag: "Search App",
    description: "Search, filter, and save meals — built around fast, clutter-free browsing.",
    image: recipeimg,
    live: "https://declutterqueen.github.io/Recipe-finder/",
    github: "https://github.com/mehreencodes/Recipe-finder"
  },
];

/* ── single card ── */
const ProjectCard = ({ proj, index }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`prj-card ${visible ? "prj-visible" : ""}`}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      {/* image */}
      <div className="prj-img-wrap">
        <img src={proj.image} alt={proj.title} className="prj-img" />
        <span className="prj-tag">{proj.tag}</span>
      </div>

      {/* body */}
      <div className="prj-body">
        <h3 className="prj-title">{proj.title}</h3>
        <p className="prj-desc">{proj.description}</p>

        {/* both buttons always visible — no hover needed */}
        <div className="prj-btns">
          <a href={proj.live} target="_blank" rel="noopener noreferrer" className="prj-btn prj-btn-live">
            <FaExternalLinkAlt size={13} /> Live Preview
          </a>
          {proj.github ? (
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="prj-btn prj-btn-gh">
              <FaGithub size={14} /> View Code
            </a>
          ) : (
            <span className="prj-btn prj-btn-gh prj-btn-disabled">
              <FaGithub size={14} /> Private Repo
            </span>
          )}
        </div>
      </div>

      {/* corner accent */}
      <div className="prj-corner" />
    </div>
  );
};

/* ── main section ── */
const Projects = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const projects = activeTab === "featured" ? featuredProjects : miniProjects;

  return (
    <section id="projects" className="prj-section">

      {/* heading */}
      <div className="prj-heading">
         <span className="prj-label">Portfolio</span> 
        <h2 className="prj-main-title">My Work</h2>
        <p className="prj-subtitle">
          A curated selection of projects — from full UIs to interactive tools.
        </p>
      </div>

      {/* tabs */}
      <div className="prj-tabs">
        <button
          className={`prj-tab ${activeTab === "featured" ? "prj-tab-active" : ""}`}
          onClick={() => setActiveTab("featured")}
        >
          <span className="tab-dot" /> Featured Projects
        </button>
        <button
          className={`prj-tab ${activeTab === "mini" ? "prj-tab-active" : ""}`}
          onClick={() => setActiveTab("mini")}
        >
          <span className="tab-dot" /> Mini Projects
        </button>
      </div>

      {/* grid */}
      <div className="prj-grid">
        {projects.map((proj, i) => (
          <ProjectCard key={`${activeTab}-${i}`} proj={proj} index={i} />
        ))}
      </div>

    </section>
  );
};

export default Projects;