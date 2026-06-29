import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebookF,
  FaMediumM,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";
import "../index.css";

const navLinks = [
  { label: "Home",      href: "#home"      },
  { label: "About",     href: "#about"      },
  { label: "Education", href: "#education"  },
  { label: "Skills",    href: "#skills"     },
  { label: "Projects",  href: "#projects"   },
  { label: "Contact",   href: "#contact"    },
];

const socials = [
  { icon: <FaGithub />,    href: "https://github.com/Declutterqueen",                                                                                          label: "GitHub"   },
  { icon: <FaLinkedin />,  href: "https://www.linkedin.com/in/mehreen-khalid-53bbbb361/",                                                                      label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/mehreenk154/",                                                                                     label: "Instagram"},
  { icon: <FaMediumM />,   href: "https://medium.com/@khalidmehri65",                                                                                           label: "Medium"   },
  { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61588131044744",                                                                     label: "Facebook" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="ftr-section">

      {/* top gradient line */}
      <div className="ftr-top-line" />

      <div className="ftr-container">

        {/* ── GRID ── */}
        <div className="ftr-grid">

          {/* Brand */}
          <div className="ftr-brand">
            <div className="ftr-logo">
              <span className="ftr-logo-circle">MK</span>
              <h2>Mehreen Khalid</h2>
            </div>
            <p className="ftr-brand-desc">
              Crafting modern, responsive websites and meaningful digital
              experiences with clean design and purposeful code.
            </p>

            {/* social icons under brand */}
            <div className="ftr-socials">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="ftr-social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="ftr-col">
            <h3 className="ftr-col-title">Quick Links</h3>
            <ul className="ftr-links">
              {navLinks.map((l, i) => (
                <li key={i}>
                  <a href={l.href} className="ftr-link">
                    <span className="ftr-link-arrow">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div className="ftr-col">
            <h3 className="ftr-col-title">Get In Touch</h3>
            <div className="ftr-contact-info">
              <a href="mailto:khalidmehri65@gmail.com" className="ftr-contact-item">
                <span className="ftr-contact-icon">✉</span>
                khalidmehri65@gmail.com
              </a>
              <a href="#contact" className="ftr-cta-mini">
                Let's Work Together →
              </a>
            </div>
          </div>

        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="ftr-bottom">
          <p className="ftr-copy">
            © 2026 Mehreen Khalid. Made with <FaHeart className="ftr-heart" /> All rights reserved.
          </p>

          <button onClick={scrollToTop} className="ftr-scroll-top" aria-label="Back to top">
            <FaArrowUp />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;