import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { ArrowRight, MessageCircle, Check } from "lucide-react";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const CursorDot = () => {
  const dotRef = useRef(null);
  useEffect(() => {
    const dot = dotRef.current;
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    let rafId;
    const move = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const animate = () => {
      curX += (mouseX - curX) * 0.35;
      curY += (mouseY - curY) * 0.35;
      if (dot) dot.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
      rafId = requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", move);
    animate();
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);
  return <div className="cursor-dot" ref={dotRef} />;
};

// EDIT — your stack
const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
];

// EDIT — rotating 2nd line (first one is your original)
const phrases = [
  "That Get Results",
  "That Convert Visitors",
  "That Load Instantly",
  "Built to Scale",
];

// EDIT — keep these TRUE and checkable
const proofPoints = [
  "9+ live projects",
  "Mobile-first builds",
  "Clean, maintainable code",
];

const RotatingLine = () => {
  const [i, setI] = useState(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const id = setInterval(() => setI((p) => (p + 1) % phrases.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="v4-rotator">
      {phrases.map((text, idx) => (
        <span
          key={text}
          className={`v4-rot-word ${idx === i ? "on" : ""}`}
          aria-hidden={idx !== i}
        >
          {text}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  return (
    <section id="home" className="hero-v4-section">
      <CursorDot />
      <div className="hero-grid" />
      <div className="hero-vignette" />
      <div className="orb orb1" />
      <div className="orb orb2" />

      <div className="hero-v4-inner">
        <span className="v4-eyebrow v4-reveal" style={{ "--d": "0s" }}>
          <i className="v4-live-dot" />
          React.js Developer · Open for Freelance
        </span>

        <h1 className="v4-heading v4-reveal" style={{ "--d": "0.1s" }}>
          <span className="v4-heading-line1">I Build Fast, Modern Websites</span>
          <RotatingLine />
        </h1>

        <p className="v4-subtitle v4-reveal" style={{ "--d": "0.2s" }}>
          Landing pages, business sites, ecommerce &amp; web apps in React.js —
          engineered to load fast and turn visitors into customers.
        </p>

        <div className="v4-btns v4-reveal" style={{ "--d": "0.3s" }}>
          <a href="#projects" className="v4-btn-primary">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="v4-btn-outline">
            Start a Project <MessageCircle size={16} />
          </a>
        </div>

        <div className="v4-proof v4-reveal" style={{ "--d": "0.4s" }}>
          {proofPoints.map((p) => (
            <span key={p}>
              <Check size={14} /> {p}
            </span>
          ))}
        </div>

        <div className="v4-tech-trust v4-reveal" style={{ "--d": "0.5s" }}>
          <span className="v4-tech-label">Tech I Work With</span>
          <div className="v4-tech-icons">
            {techStack.map(({ icon: Icon, name }) => (
              <span className="v4-tech-pill" key={name} title={name}>
                <Icon size={18} />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;