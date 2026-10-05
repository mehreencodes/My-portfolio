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



/* =========================================
   Hero v4 — fully centered layout (no photo/stats)
   Reuses .hero-grid, .hero-vignette, .orb, .cursor-dot
   from the rest of the site's CSS.
   ========================================= */

.hero-v4-section {
  position: relative;
  overflow: hidden;
  min-height: 92vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 160px 6vw 100px;
  text-align: center;
  background: radial-gradient(ellipse 70% 60% at 50% 30%, #141414 0%, #050505 70%);
}
.hero-v4-section .orb1 {
  width: 560px; height: 560px;
  background: radial-gradient(circle, rgba(183,60,102,0.16) 0%, transparent 70%);
  right: -100px; top: -100px;
}
.hero-v4-section .orb2 {
  width: 320px; height: 320px;
  background: radial-gradient(circle, rgba(183,60,102,0.1) 0%, transparent 70%);
  left: 8%; bottom: 5%;
}
.hero-v4-inner {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.v4-avail-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 7px 16px;
  border-radius: 30px;
  background: rgba(34, 197, 94, 0.06);
  border: 1px solid rgba(34, 197, 94, 0.25);
  color: #4ade80;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.3px;
  margin-bottom: 22px;
}
.v4-avail-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #22c55e;
  box-shadow: 0 0 8px rgba(34, 197, 94, 0.8);
  animation: v4Pulse 1.8s ease-in-out infinite;
}
@keyframes v4Pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.5; transform: scale(0.8); }
}

.v4-eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: #ff9ec7;
  padding: 8px 20px;
  border-radius: 30px;
  background: rgba(183, 60, 102, 0.1);
  border: 1px solid rgba(183, 60, 102, 0.35);
  margin-bottom: 22px;
}

/* .v4-heading {
  font-size: clamp(2.3rem, 5.5vw, 3.9rem);
  font-weight: 800;
  line-height: 1.15;
  color: #f5f5f7;
  margin: 0 0 22px;
} */

.v4-heading-line1 {
  white-space: nowrap;
}

/* .v4-heading-accent {
  background: linear-gradient(90deg, #b73c66, #ff7aa8);
  -webkit-background-clip: text;
  background-clip: text;
  color: #ff7aa8; 
} */
 .v4-heading {
  font-size: clamp(2.6rem, 6.8vw, 5rem);
  font-weight: 800;
  line-height: 1.08;
  letter-spacing: -0.02em;
  color: #f5f5f7;
  margin: 0 0 24px;
}
.v4-heading-accent { display: inline-block; max-width: 900px; }

@media (max-width: 600px) {
  .v4-heading { font-size: clamp(2rem, 9vw, 2.8rem); }
}
@supports ((-webkit-background-clip: text) or (background-clip: text)) {
  .v4-heading-accent {
    -webkit-text-fill-color: transparent;
    color: transparent;
  }
}

.v4-subtitle {
  font-size: 1.05rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.6);
  max-width: 560px;
  margin: 0 auto 28px;
}

.v4-btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
}

.v4-btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 30px;
  border-radius: 8px;
  background: linear-gradient(135deg, #b73c66, #ff7aa8);
  color: #fff;
  font-weight: 700;
  font-size: 0.95rem;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(183, 60, 102, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.v4-btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 32px rgba(183, 60, 102, 0.5);
}

.v4-btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 30px;
  border-radius: 8px;
  background: rgba(183, 60, 102, 0.08);
  border: 1.5px solid rgba(183, 60, 102, 0.4);
  color: #f0f0f2;
  font-weight: 600;
  font-size: 0.95rem;
  text-decoration: none;
  transition: all 0.25s ease;
}
.v4-btn-outline:hover {
  background: rgba(183, 60, 102, 0.16);
  border-color: #b73c66;
  color: #fff;
  transform: translateY(-2px);
  box-shadow: 0 8px 22px rgba(183, 60, 102, 0.25);
}

/* ── bottom trust row (tech icons) ── */
.v4-tech-trust {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding-top: 24px;
  position: relative;
}
.v4-tech-trust::before {
  content: '';
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(183, 60, 102, 0.5), transparent);
  margin-bottom: 4px;
}

.v4-tech-label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.35);
}

.v4-tech-icons {
  display: flex;
  gap: 22px;
}

.v4-tech-pill {
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: rgba(255, 255, 255, 0.55);
  transition: all 0.25s ease;
}
.v4-tech-pill:hover {
  background: rgba(183, 60, 102, 0.12);
  border-color: rgba(183, 60, 102, 0.4);
  color: #ff9ec7;
  transform: translateY(-3px);
}

@media (max-width: 600px) {
  .hero-v4-section {
    padding: 120px 20px 60px;
  }

  .v4-btns {
    flex-direction: column;
    width: 100%;
    gap: 12px;
    margin-bottom: 28px;
  }

  .v4-btn-primary,
  .v4-btn-outline {
    width: 100%;
    justify-content: center;
    padding: 14px 20px;
    font-size: 0.9rem;
  }

  .v4-heading {
    font-size: clamp(1.9rem, 7vw, 2.6rem);
  }

  .v4-subtitle {
    font-size: 0.95rem;
    padding: 0 8px;
  }

  .v4-eyebrow {
    font-size: 0.7rem;
    padding: 6px 16px;
  }
}

    
  

@media (max-width: 600px) {
  .v4-heading-line1 {
    white-space: normal; /* allow wrap so nothing gets cut off */
  }
  .hero-v4-inner {
    max-width: 100%;
    padding: 0 4px;
    box-sizing: border-box;
  }
  .v4-heading {
    overflow-wrap: break-word;
    word-break: break-word;
  }
}
    
  

    
  /* ── TABLET (601px – 900px) ── */
@media (max-width: 900px) and (min-width: 601px) {
  .v4-btns {
    gap: 12px;
  }
  .v4-btn-primary,
  .v4-btn-outline {
    padding: 13px 26px;
    font-size: 0.9rem;
  }
}

/* ── MOBILE (≤600px) ── */
@media (max-width: 600px) {
  .hero-v4-section {
    padding: 120px 20px 60px;
  }

  .v4-btns {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    margin-bottom: 28px;
  }

  .v4-btn-primary,
  .v4-btn-outline {
    width: 85%;
    max-width: 300px;
    justify-content: center;
    padding: 13px 18px;
    font-size: 0.88rem;
  }

  .v4-heading {
    font-size: clamp(1.9rem, 7vw, 2.6rem);
  }

  .v4-subtitle {
    font-size: 0.95rem;
    padding: 0 8px;
  }

  .v4-eyebrow {
    font-size: 0.7rem;
    padding: 6px 16px;
  }
}

/* ── SMALL MOBILE (≤480px) ── */
@media (max-width: 480px) {
    .v4-heading {
    font-size: clamp(1.7rem, 7.5vw, 2.3rem);
  }
  .v4-btns {
    gap: 10px;
    margin-bottom: 22px;
  }

  .v4-btn-primary,
  .v4-btn-outline {
    width: 80%;
    max-width: 260px;
    padding: 11px 14px;
    font-size: 0.82rem;
    gap: 6px;
  }

  .v4-btn-primary svg,
  .v4-btn-outline svg {
    width: 14px;
    height: 14px;
  }
}

/* ── EXTRA SMALL (≤360px) ── */
@media (max-width: 360px) {
  .v4-btn-primary,
  .v4-btn-outline {
    width: 90%;
    max-width: 240px;
    font-size: 0.78rem;
    padding: 10px 12px;
  }

  .v4-heading {
    font-size: clamp(1.6rem, 8vw, 2.1rem);
  }

  .v4-subtitle {
    font-size: 0.85rem;
  }
}


