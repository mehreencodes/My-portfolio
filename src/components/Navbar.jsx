import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import "../index.css";

// order should match the order of sections on your page
const navItems = ["Home", "About", "Services", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef(null);
  const barRef = useRef(null);

  // compact navbar + scroll progress line
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        barRef.current.style.setProperty("--p", max > 0 ? Math.min(y / max, 1) : 0);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // close mobile menu: Escape key or click outside
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    const onPointer = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <div className="nav-progress" ref={barRef} aria-hidden="true" />

      <nav
        className={`navbar ${scrolled ? "scrolled" : ""}`}
        ref={navRef}
        aria-label="Main navigation"
      >
        <div className="navbar-container">
          {/* Logo */}
          <Link
            to="home"
            href="#home"
            smooth
            offset={-80}
            duration={500}
            className="logo"
            onClick={close}
            aria-label="Mehreen Khalid, back to top"
          >
            <span className="logo-circle">MK</span>
            <span className="logo-name">Mehreen K.</span>
          </Link>

          {/* Nav links */}
          <ul className={`nav-links ${open ? "active" : ""}`} id="nav-links">
            {navItems.map((item) => {
              const id = item.toLowerCase();
              return (
                <li key={item}>
                  <Link
                    to={id}
                    href={`#${id}`}
                    spy
                    smooth
                    offset={-80}
                    duration={500}
                    activeClass="is-active"
                    onClick={close}
                  >
                    {item}
                    <span className="underline" />
                  </Link>
                </li>
              );
        
            } )}
                        {/* CTA inside the mobile menu (hidden on desktop) */}
            <li className="nav-cta-li">
              <Link
                to="contact"
                href="#contact"
                smooth
                offset={-80}
                duration={500}
                className="nav-cta-link"
                onClick={close}
              >
                Work With Me
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="nav-btn">
            <Link
              to="contact"
              href="#contact"
              smooth
              offset={-80}
              duration={500}
              className="btn-template"
              onClick={close}
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            className={`nav-toggle ${open ? "active" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="nav-links"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;