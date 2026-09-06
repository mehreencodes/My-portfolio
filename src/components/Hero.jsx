import React, { useEffect, useRef } from "react";
import "../index.css";
import { ArrowRight, MessageCircle } from "lucide-react";
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

const Hero = () => {
  return (
    <section id="home" className="hero-v4-section">
      <CursorDot />
      <div className="hero-grid" />
      <div className="hero-vignette" />
      <div className="orb orb1" />
      <div className="orb orb2" />

      <div className="hero-v4-inner">

        <span className="v4-eyebrow">Building Modern Web Experiences</span>

        <h1 className="v4-heading">
          <span className="v4-heading-line1">I Build Fast, Modern Websites</span>
          <br />
          <span className="v4-heading-accent">That Get Results</span>
        </h1>

        <p className="v4-subtitle">
          React.js websites — built fast, clean, and made to convert.
          Landing pages, business sites, ecommerce &amp; web apps.
        </p>

        <div className="v4-btns">
          <a href="#projects" className="v4-btn-primary">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="#contact" className="v4-btn-outline">
            Start a Project <MessageCircle size={16} />
          </a>
        </div>

        <div className="v4-tech-trust">
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