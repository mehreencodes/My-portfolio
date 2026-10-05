import React, { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { ArrowUpRight, X } from "lucide-react";
import "../index.css";
import resumeImg     from "../assets/resume.jpg";
import ecoimg        from "../assets/cloth.png";
import mealimg       from "../assets/food.png";
import formimg       from "../assets/form.jpg";
import weatherimg    from "../assets/weather2.png";
import Gradientimg   from "../assets/Gradient.png";
import neureimg      from "../assets/neure.jpg";
import dashboardimg  from "../assets/dashboard.jpg";
import recipeimg     from "../assets/recipe.png";
import medicareimg   from "../assets/doctor.png";
import khataimg      from "../assets/khata.jpg";
import formcraftimg  from "../assets/drag-form.jpg";
import safepayimg    from "../assets/safepay.jpg";
import purplehourimg from "../assets/bts.jpg";

/* ─────────────────────────────────────────────
   EDIT:
   • cat       → one of the FILTERS below (except "All")
   • featured  → true gives the badge + "Case study" popup
   • stack     → your REAL tech for that project
   • note      → how you built it, in your own words (2 lines)
   • metric    → only a REAL measured number, else null
───────────────────────────────────────────── */
const FILTERS = ["All", "Full-Stack", "Websites & Stores", "Apps & Tools"];

const projects = [
  {
    title: "SafePay", tag: "Full Stack App", cat: "Full-Stack", featured: true,
    desc: "Real checkout built on Pakistan's Safepay gateway — secure server-side payments and a hosted payment page.",
    stack: ["Next.js 15", "React", "Node.js (API Routes)", "Axios", "Safepay API", "Vercel"],
    metric: null,
    problem: "Accepting real payments online means the secret API key must never be exposed to the browser.",
    decisions: [
      { title: "Server-side payment API", text: "The checkout calls a Next.js API route that talks to Safepay, so the secret key stays on the server." },
      { title: "Hosted checkout with a tracker token", text: "The backend requests a payment tracker token and redirects the customer to Safepay's hosted page, so card details are entered on the gateway's PCI-compliant checkout, not on my own pages." },
      { title: "Config-driven environments", text: "Keys and the sandbox or production mode live in environment variables, so going live is a config change, not a code change." },
    ],
    outcome: "A complete flow tested in Safepay's sandbox: checkout form, server API, hosted payment, success page.",
    note: "The browser only ever talks to my own /api/payment endpoint; the secret key never leaves the server.",
    image: safepayimg,
    live: "https://safepay-payment-beta.vercel.app/checkout",
    github: "https://github.com/mehreencodes/safepay-payment",
  },
  {
    title: "FormCraft Pro", tag: "Full Stack App", cat: "Full-Stack", featured: true,
    desc: "Drag-and-drop form builder synced to a live database — every edit saves in real time.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Mongoose", "react-beautiful-dnd", "Railway"],
    metric: null,
    problem: "A form builder is only useful if edits are never lost, so every change has to be saved as it happens.",
    decisions: [
      { title: "Visual drag-and-drop builder", text: "Fields are arranged and reordered visually with react-beautiful-dnd instead of through settings or code." },
      { title: "REST API on Express + MongoDB", text: "A separate Express server with Mongoose models and route files stores every form in MongoDB." },
      { title: "Save on every edit", text: "Changes are sent to the API as they happen, so there is no manual save step." },
    ],
    outcome: null,
    note: "Client and server are separate: a React front end talks to an Express + MongoDB API, deployed on Railway.",
    image: formcraftimg,
    // live: "https://drag-form-builder-production-242b.up.railway.app/",
       live: "https://github.com/mehreencodes/drag-form-builder",
    github: "https://github.com/mehreencodes/drag-form-builder",
  },
  {
    title: "Quick Khata", tag: "Invoicing App", cat: "Apps & Tools",
    desc: "Offline-first invoicing and ledger app for small shops — works fully without internet, with JSON and CSV backup.",
    image: khataimg,
    live: "https://khata-pro-gamma.vercel.app/",
    github: "https://github.com/mehreencodes/Khata-pro",
  },
  { title: "MediCare", tag: "React App", cat: "Websites & Stores", desc: "Doctor search and appointment booking with filters that actually narrow results fast.", image: medicareimg, live: "https://medi-care-healthcare-website.vercel.app/", github: "https://github.com/mehreencodes/MediCare-Healthcare-Website" },
  { title: "TerraThread Store", tag: "E-Commerce", cat: "Websites & Stores", desc: "Full storefront UI — product grid, cart, and checkout flow, fully responsive.", image: ecoimg, live: "https://terrathread-store.vercel.app/", github: "https://github.com/mehreencodes/terrathread-store" },
  { title: "DashFlow Dashboard", tag: "Dashboard", cat: "Apps & Tools", desc: "Admin dashboard with live charts — built to make data readable at a glance, not overwhelming.", image: dashboardimg, live: "https://saasdashboard154.netlify.app/", github: "https://github.com/mehreencodes/Dashboard" },
  { title: "Resume Builder", tag: "React App", cat: "Apps & Tools", desc: "Live preview meets instant PDF export — no page reloads, no lost formatting.", image: resumeImg, live: "https://resume-builder-react-pied.vercel.app/", github: "https://github.com/mehreencodes/Resume-builder-react" },
  { title: "PurpleHour", tag: "React App", cat: "Websites & Stores", desc: "An animated tribute experience — profiles, discography, and a world tour map with smooth transitions.", image: purplehourimg, live: "https://purple-hour-iota.vercel.app/", github: "https://github.com/mehreencodes/purple-hour" },
  { title: "Dragon Bite", tag: "Recipe Site", cat: "Websites & Stores", desc: "Recipe layouts built for scanning — ingredients and steps visible without endless scrolling.", image: mealimg, live: "https://chineesefood.vercel.app/", github: "https://github.com/mehreencodes/Chineesefood" },
  { title: "Weather App", tag: "API App", cat: "Apps & Tools", desc: "Real-time weather lookup with a clean, distraction-free search interface.", image: weatherimg, live: "https://weather-app-nine-ecru-11.vercel.app/", github: "https://github.com/mehreencodes/Weather-App" },
  { title: "NeuraSpace", tag: "Interactive", cat: "Apps & Tools", desc: "An experiment in motion — immersive animations built purely for visual polish.", image: neureimg, live: "https://neura-space-k3wjpoofn-declutterqueens-projects.vercel.app/", github: "https://github.com/mehreencodes/NeuraSpace" },
  { title: "Smart Contact Form", tag: "Form UI", cat: "Apps & Tools", desc: "Validation and feedback that guide users instead of just blocking bad input.", image: formimg, live: "https://smart-contact-form-phi.vercel.app/", github: "https://github.com/mehreencodes/smart-contact-form" },
  { title: "Gradient Generator", tag: "CSS Tool", cat: "Apps & Tools", desc: "Live gradient builder with one-click copy-to-clipboard CSS export.", image: Gradientimg, live: "https://declutterqueen.github.io/Gradient-generator/", github: "https://github.com/mehreencodes/Gradient-generator" },
  { title: "Recipe Finder", tag: "Search App", cat: "Apps & Tools", desc: "Search, filter, and save meals — built around fast, clutter-free browsing.", image: recipeimg, live: "https://declutterqueen.github.io/Recipe-finder/", github: "https://github.com/mehreencodes/Recipe-finder" },
];

const INITIAL_VISIBLE = 9;

const hostOf = (url) => {
  try { return new URL(url).hostname; } catch { return ""; }
};

const Card = ({ p, index, onOpen }) => {
  const hasCase = Boolean(p.problem || p.decisions?.length || p.note);

  // mouse-follow spotlight
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };

  return (
    <article
      className="px-card"
      style={{ "--i": index % INITIAL_VISIBLE }}
      onMouseMove={onMove}
    >
      {/* whole card clickable */}
      {hasCase ? (
        <button
          type="button"
          className="px-hit"
          onClick={() => onOpen(p)}
          aria-label={`Open ${p.title} case study`}
        />
      ) : (
        <a
          className="px-hit"
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open ${p.title} live`}
        />
      )}

      <div className="px-top">
        <span className="px-idx">{String(index + 1).padStart(2, "0")}</span>
        <span className="px-cat">{p.cat.toLowerCase()}</span>
      </div>

      <div className="px-shot">
        <div className="px-bar">
          <i /><i /><i />
          <span>{hostOf(p.live)}</span>
        </div>
        <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" />
        {p.featured && <span className="px-feat">Featured</span>}
      </div>

      <div className="px-body">
        <span className="px-tag">{p.tag}</span>
        <h3 className="px-name">{p.title}</h3>
        <p className="px-desc">{p.desc}</p>
      </div>

      <div className="px-foot">
        <a href={p.live} target="_blank" rel="noopener noreferrer">
          Live <ArrowUpRight size={14} />
        </a>
        {p.github && (
          <a href={p.github} target="_blank" rel="noopener noreferrer" aria-label={`${p.title} source code`}>
            <FaGithub size={14} /> Code
          </a>
        )}
        {hasCase && (
          <button type="button" className="px-case" onClick={() => onOpen(p)}>
            Case study <ArrowUpRight size={14} />
          </button>
        )}
      </div>
    </article>
  );
};

/* ── Case study popup ── */
const CaseModal = ({ p, onClose }) => {
  const closeRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div className="pg-modal" onClick={onClose}>
      <div
        className="pg-sheet"
        role="dialog"
        aria-modal="true"
        aria-label={`${p.title} case study`}
        onClick={(e) => e.stopPropagation()}
      >
        <button type="button" className="pg-x" onClick={onClose} ref={closeRef} aria-label="Close">
          <X size={18} />
        </button>

        <div className="pg-sheet-frame">
          <div className="pg-frame-bar">
            <i /><i /><i />
            <span>{hostOf(p.live)}</span>
          </div>
          <img src={p.image} alt={`${p.title} screenshot`} />
        </div>

        <div className="pg-sheet-body">
          <div className="pg-sheet-meta">
            <span className="pg-tag">{p.tag}</span>
            {p.metric && <span className="pg-metric">{p.metric}</span>}
          </div>
          <h3 className="pg-sheet-title">{p.title}</h3>
          <p className="pg-sheet-desc">{p.desc}</p>

          {p.stack?.length > 0 && (
            <ul className="pg-pills">
              {p.stack.map((s) => <li key={s}>{s}</li>)}
            </ul>
          )}

          <div className="pg-note">
            <span>Architecture Note</span>
            <p>{p.note}</p>
          </div>

          <div className="pg-btns">
            <a href={p.live} target="_blank" rel="noopener noreferrer" className="pg-btn pg-btn-main">
              Live Preview <ArrowUpRight size={15} />
            </a>
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="pg-btn pg-btn-ghost">
                <FaGithub size={15} /> Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ── Main ── */
const Projects = () => {
  const [filter, setFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);
  const [open, setOpen] = useState(null);
  const [visible, setVisible] = useState(false);
  const gridRef = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    if (gridRef.current) obs.observe(gridRef.current);
    return () => obs.disconnect();
  }, []);

  const filtered = projects.filter((p) => filter === "All" || p.cat === filter);
  const list = filter === "All" && !showAll ? filtered.slice(0, INITIAL_VISIBLE) : filtered;

  return (
    <section id="projects" className="pg-section">
      <div className="pg-inner">
        <header className="pg-head">
          <span className="pg-label">Portfolio</span>
          <h2 className="pg-heading">
            Selected <span className="pg-accent">Work</span>
          </h2>
        </header>

        <div className="pg-filters" role="group" aria-label="Filter projects">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              className={`pg-chip ${filter === f ? "active" : ""}`}
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>

        <div className={`pg-grid ${visible ? "pg-in" : ""}`} ref={gridRef}>
          {list.map((p, i) => (
            <Card key={`${filter}-${p.title}`} p={p} index={i} onOpen={setOpen} />
          ))}
        </div>

        {filter === "All" && projects.length > INITIAL_VISIBLE && (
          <div className="pg-more">
            <button type="button" className="pg-toggle" onClick={() => setShowAll((v) => !v)} aria-expanded={showAll}>
              {showAll ? "Show fewer" : `Show all ${projects.length} projects`}
            </button>
          </div>
        )}
      </div>

      {open && <CaseModal p={open} onClose={() => setOpen(null)} />}
    </section>
  );
};

export default Projects;