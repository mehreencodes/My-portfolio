
import React, { useEffect, useRef } from "react";
import profileImg from "../assets/hero.png";
import "../index.css";
import { Rocket } from "lucide-react";


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

const Hero = () => {

  const handleScroll = (e) => {
    e.preventDefault();
    // scroll to next section after hero
    const next = document.querySelector("#home + section") ||
                 document.querySelector("#about") ||
                 document.querySelector("section:nth-of-type(2)");
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero-section">
      <CursorDot />
      <div className="orb orb1" />
      <div className="orb orb2" />

      <div className="hero-inner">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-name-wrap">
            <p className="greeting">Hello, I'm</p>
            <h1 className="hero-name">
              Mehreen<br />
              <span className="name-pink">Khalid.</span>
            </h1>
          </div>

          <p className="hero-tagline">
            I build <strong>pixel-perfect interfaces</strong> &amp; write{" "}
            <strong>content that converts</strong> — helping businesses
            stand out online.
          </p>

          <div className="hero-stats">
            <div className="stat">
              <span className="stat-n">10+</span>
              <span className="stat-l">Projects</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-n">React</span>
              <span className="stat-l">Main Stack</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-n">100%</span>
              <span className="stat-l">Dedicated</span>
            </div>
          </div>

          <div className="hero-btns">
            <a href="#projects" className="btn-cta">
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#contact" className="btn-outline">
              Let's Talk
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </a>
          </div>

          <div className="hero-socials">
            <span className="social-label">Find me</span>
            <span className="s-line" />
            <a href="https://github.com/Declutterqueen" target="_blank"
              rel="noreferrer" className="social-link" title="GitHub">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mehreen-khalid-53bbbb361"
              target="_blank" rel="noreferrer" className="social-link" title="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61588131044744"
              target="_blank" rel="noreferrer" className="social-link" title="Facebook">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1.1 0 2.2.2 2.2.2v2.4h-1.2c-1.2 0-1.6.8-1.6 1.5V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
              </svg>
            </a>
          </div>

        </div>

        {/* RIGHT */}
        <div className="hero-right">
          <div className="img-glow" />
          <div className="img-ring-outer">
            <span className="ring-dot ring-top" />
            <span className="ring-dot ring-bottom" />
          </div>
          <div className="img-circle">
            <img src={profileImg} alt="Mehreen Khalid" />
          </div>

          <div className="float-card fc-projects">
            <div className="fc-icon"><Rocket size={16} /></div>
            <div className="fc-text">
              <span className="fc-num">10+</span>
              <span className="fc-lbl">Projects Done</span>
            </div>
          </div>

          <div className="float-card fc-tech">
            <span className="fc-label">Tech Stack</span>
            <div className="tech-stack">
              <span className="tech-tag">React</span>
              <span className="tech-tag">CSS</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Git</span>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll — smooth scrolls to next section */}
      <div className="scroll-hint" onClick={handleScroll} role="button"
        tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleScroll(e)}>
        <span>Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
      </div>

    </section>
  );
};

export default Hero;