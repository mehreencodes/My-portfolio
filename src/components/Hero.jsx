import React, { useEffect, useRef } from "react";
import profileImg from "../assets/hero.png";
import "../index.css";
import { Rocket, Code2, Sparkles, ArrowRight, MessageCircle } from "lucide-react";
import { SiReact, SiNodedotjs, SiExpress, SiMongodb } from "react-icons/si";

const CursorDot = () => {
  const dotRef = useRef(null);
  useEffect(() => {
    const dot = dotRef.current;
    let mouseX = 0, mouseY = 0, curX = 0, curY = 0;
    const move = (e) => { mouseX = e.clientX; mouseY = e.clientY; };
    const animate = () => {
      curX += (mouseX - curX) * 0.35;
      curY += (mouseY - curY) * 0.35;
      if (dot) dot.style.transform = `translate3d(${curX}px, ${curY}px, 0)`;
      requestAnimationFrame(animate);
    };
    window.addEventListener("mousemove", move);
    animate();
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return <div className="cursor-dot" ref={dotRef} />;
};

// EDIT — your stack (real brand icons, no text labels)
const techStack = [
  { icon: SiReact, name: "React" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiExpress, name: "Express" },
  { icon: SiMongodb, name: "MongoDB" },
];

// EDIT — your stats
const stats = [
  { icon: Rocket, num: "20+", label: "Projects Completed" },
  { icon: Code2, num: "React", label: "Main Stack" },
  { icon: Sparkles, num: "100%", label: "Dedicated" },
];

const Hero = () => {
  return (
    <section id="home" className="hero-v3-section">
      <CursorDot />
      <div className="hero-grid" />
      <div className="hero-vignette" />
      <div className="orb orb1" />
      <div className="orb orb2" />

      <div className="hero-v3-inner">

        {/* LEFT */}
        <div className="hero-v3-left">
          <span className="v3-eyebrow">React.js Developer</span>

          <h1 className="v3-heading">
            I Build Fast, Modern Websites
            <br />
            <span className="v3-heading-accent">That Get Results</span>
          </h1>

          <p className="v3-subtitle">
            React.js websites — built fast, clean, and made to convert.
          </p>

          <div className="v3-service-pills">
            <span>Landing Pages</span>
            <span>Business Sites</span>
            <span>Ecommerce</span>
            <span>Web Apps</span>
          </div>

          <div className="v3-btns">
            <a href="#projects" className="v3-btn-primary">
              View My Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="v3-btn-outline">
              Start a Project <MessageCircle size={16} />
            </a>
          </div>

          <div className="v3-tech">
            <span className="v3-tech-label">Tech I Work With</span>
            <div className="v3-tech-icons">
              {techStack.map(({ icon: Icon, name }) => (
                <span className="v3-tech-pill" key={name} title={name}>
                  <Icon size={16} />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hero-v3-right">
          <div className="v3-photo-wrap">
            <div className="v3-ring" />
            <img src={profileImg} alt="Mehreen Khalid" className="v3-photo" />
          </div>

          <div className="v3-stats">
            {stats.map(({ icon: Icon, num, label }) => (
              <div className="v3-stat-item" key={label}>
                <div className="v3-stat-icon">
                  <Icon size={18} />
                </div>
                <div className="v3-stat-text">
                  <span className="v3-stat-num">{num}</span>
                  <span className="v3-stat-lbl">{label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;