import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../index.css";
import resumeImg    from "../assets/resume.jpg";
import ecoimg       from "../assets/ecomerce.png";
import mealimg      from "../assets/onlinemeal.png";
import formimg      from "../assets/form.jpg";
import weatherimg   from "../assets/weather.jpg";
import Gradientimg  from "../assets/Gradient.png";
import neureimg     from "../assets/neure.jpg";
import dashboardimg from "../assets/dashboard.jpg";
import recipeimg    from "../assets/recipe.png";
// import expenseimg   from "../assets/expensetracker.png";
import medicareimg from "../assets/health.jpg"
import khataimg from "../assets/khata.jpg" 
import formcraftimg from  "../assets/drag-form.jpg" 
const featuredProjects = [
  { title: "Resume Builder",           tag: "React App",   description: "Create professional resumes with live preview and export.", image: resumeImg,    live: "https://resume-builder-react-pied.vercel.app/",                             github: "https://github.com/Declutterqueen/Resume-builder-react" },
  {
    title: "MediCare",
    tag: "React App",
    description: "Healthcare clinic website with doctor search, filter, animations & appointment booking.",
    image: medicareimg,
    live: "https://medi-care-healthcare-website.vercel.app/",
    github: "https://github.com/Declutterqueen/MediCare-Healthcare-Website"
  },
  { title: "Dragon Bite",              tag: "Recipe Site", description: "Chinese cuisine website with clean recipe layouts.",         image: mealimg,      live: "https://chineesefood.vercel.app/",                                          github: "https://github.com/Declutterqueen/Chineesefood" },
  { title: "Sustainable E-Commerce",   tag: "Full UI",     description: "Eco-friendly fashion store with modern UI & filtering.",    image: ecoimg,       live: "https://sustainablefashion-site.netlify.app/",                              github: "https://github.com/declutterqueen/Sustainable-fashion" },
  { title: "DashFlow Dashboard",       tag: "Dashboard",   description: "Interactive admin dashboard with charts & data views.",     image: dashboardimg, live: "https://saasdashboard154.netlify.app/",                                      github: "https://github.com/Declutterqueen/Dashboard" },
  { title: "Quick Khata", tag: "Invoicing App", description: "Offline invoicing & ledger app with dashboard, khata book & reports.", image: khataimg, live: "https://khata-pro-gamma.vercel.app/", github: "https://github.com/mehreencodes/Khata-pro" },
  { title: "FormCraft Pro", tag: "Full Stack App", description: "Drag and drop form builder with live preview, submission tracking & database storage.", image: formcraftimg, live: "https://drag-form-builder-production-242b.up.railway.app/", github: "https://github.com/Declutterqueen/drag-form-builder" },
  // { title: "Expense Tracker",          tag: "Finance App", description: "Track income, expenses & savings goals visually.",          image: expenseimg,   live: "https://declutterqueen.github.io/Expense-Tracker/",                         github: "https://github.com/declutterqueen/Expense-Tracker" },
];

const miniProjects = [
  { title: "Weather App",              tag: "API App",     description: "Real-time weather data with clean search interface.",       image: weatherimg,   live: "https://declutterqueen.github.io/Weather-App/",                             github: "https://github.com/declutterqueen/Weather-App" },
  { title: "NeuraSpace",               tag: "Interactive", description: "Futuristic interactive UI with immersive animations.",       image: neureimg,     live: "https://neura-space-k3wjpoofn-declutterqueens-projects.vercel.app/",        github: "https://github.com/Declutterqueen/NeuraSpace" },
  { title: "Smart Contact Form",       tag: "Form UI",     description: "Validated contact form with smooth UX feedback.",           image: formimg,      live: "https://smart-contact-form-phi.vercel.app/",                                github: "https://github.com/Declutterqueen/smart-contact-form" },
  { title: "Gradient Generator",       tag: "CSS Tool",    description: "Live gradient builder with copy-to-clipboard export.",      image: Gradientimg,  live: "https://declutterqueen.github.io/Gradient-generator/",                      github: "https://github.com/declutterqueen/Gradient-generator" },
  { title: "Recipe Finder",            tag: "Search App",  description: "Search, filter and save meals with a clean recipe UI.",     image: recipeimg,    live: "https://declutterqueen.github.io/Recipe-finder/",                           github: "https://github.com/declutterqueen/Recipe-finder" },
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
        <div className="prj-img-overlay">
          <a href={proj.live} target="_blank" rel="noopener noreferrer" className="prj-overlay-btn">
            <FaExternalLinkAlt /> Live Preview
          </a>
        </div>
        <span className="prj-tag">{proj.tag}</span>
      </div>

      {/* body */}
      <div className="prj-body">
        <h3 className="prj-title">{proj.title}</h3>
        <p className="prj-desc">{proj.description}</p>

        <div className="prj-btns">
          {proj.github ? (
            <a href={proj.github} target="_blank" rel="noopener noreferrer" className="prj-btn prj-btn-gh prj-btn-full">
              <FaGithub size={14} /> View Code
            </a>
          ) : (
            <span className="prj-btn prj-btn-gh prj-btn-disabled prj-btn-full">
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