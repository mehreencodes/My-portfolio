import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
 FaBriefcase
} from "react-icons/fa";
import { Mail, MapPin, ArrowUp } from "lucide-react";
import "../index.css";
import { SiFreelancer } from "react-icons/si";

const navLinks = [
  { label: "Home",      href: "#home" },
  { label: "About",     href: "#about" },
  { label: "Services",  href: "#services" },
  // { label: "Education", href: "#education" },
  { label: "Skills",    href: "#skills" },
  { label: "Projects",  href: "#projects" },
  { label: "Contact",   href: "#contact" },
];

const socials = [
  { icon: <FaGithub />,    href: "https://github.com/mehreencodes",                        label: "GitHub" },
  { icon: <FaLinkedin />,  href: "https://www.linkedin.com/in/mehreenkhaliddev/",           label: "LinkedIn" },
  { icon: <FaInstagram />, href: "https://www.instagram.com/mehreenk.dev/",                 label: "Instagram" },
   { icon: <SiFreelancer />, href: "https://www.freelancer.com/u/mehreenk08?frm=mehreenk08&sb=t", label: "Freelancer" },
  // { icon: <FaMediumM />,   href: "https://medium.com/@khalidmehri65",                       label: "Medium" },
  // { icon: <FaFacebookF />, href: "https://www.facebook.com/profile.php?id=61588131044744",  label: "Facebook" },
];

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="ft-section">
      <div className="ft-top-line" />

      <div className="ft-inner">
        <div className="ft-grid">
          {/* Brand */}
          <div className="ft-brand">
            <div className="ft-logo">
              <span className="ft-logo-circle">MK</span>
              <h2>Mehreen Khalid</h2>
            </div>
            <p className="ft-desc">
              React.js developer building fast, modern websites and web apps
              for businesses — from idea to launch.
            </p>
            <div className="ft-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="ft-social"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="ft-col">
            <h3 className="ft-col-title">Quick Links</h3>
            <ul className="ft-links">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="ft-link">
                    <span className="ft-link-arrow" aria-hidden="true">→</span>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="ft-col">
            <h3 className="ft-col-title">Get In Touch</h3>
            <div className="ft-contact">
              <a href="mailto:khalidmehri65@gmail.com" className="ft-contact-item">
                <span className="ft-contact-icon"><Mail size={16} /></span>
                khalidmehri65@gmail.com
              </a>
              <div className="ft-contact-item ft-static">
                <span className="ft-contact-icon"><MapPin size={16} /></span>
                Jhelum, Punjab, Pakistan
              </div>
            </div>
          </div>
        </div>

        {/* faint wordmark */}
        <div className="ft-mark" aria-hidden="true">MEHREEN KHALID</div>

        {/* Bottom bar */}
        <div className="ft-bottom">
          <p className="ft-copy">
            © {new Date().getFullYear()} Mehreen Khalid. All rights reserved.
          </p>
          <p className="ft-built">Built with React &amp; Vite</p>
          <button type="button" onClick={scrollToTop} className="ft-top" aria-label="Back to top">
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;