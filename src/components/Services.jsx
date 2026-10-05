import React, { useEffect, useRef, useState } from "react";
import { Rocket, Building2, ShoppingCart, Server } from "lucide-react";
import "../index.css";

// EDIT — keep tags TRUE for what you actually deliver
const services = [
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "One focused page that turns visitors into enquiries.",
    tags: ["Conversion layout", "Clear call-to-action", "SEO basics"],   
  },
  {
    icon: Building2,
    title: "Business Websites",
    desc: "A professional multi-page site that builds trust.",
   tags: ["Multi-page", "Contact forms", "Easy to update"],   
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Stores",
    desc: "Product pages, cart and checkout that make buying simple.",
    tags: ["Product catalog", "Cart & checkout", "Admin panel"],
  },
  {
    icon: Server,
    title: "Full-Stack Web Apps",
    desc: "Custom apps with login, database and dashboards, built end to end.",
    tags: ["Authentication", "Database & API", "Dashboards"],
  },
];

const Services = () => {
  const gridRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (gridRef.current) observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, []);

  // mouse-follow spotlight
  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  return (
    <section id="services" className="sx-section">
      <div className="sx-inner">
        <header className="sx-head">
          <span className="sx-label">Services</span>
          <h2 className="sx-title">
            What I <span className="sx-accent">Build</span>
          </h2>
        </header>

        <div className={`sx-grid ${visible ? "sx-in" : ""}`} ref={gridRef}>
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <article
              key={title}
              className="sx-card"
              style={{ "--d": `${i * 0.1}s` }}
              onMouseMove={handleMove}
            >
              <span className="sx-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>

              <span className="sx-icon">
                <Icon size={22} />
              </span>

              <div className="sx-body">
                <h3 className="sx-card-title">{title}</h3>
                <p className="sx-card-desc">{desc}</p>
                <ul className="sx-tags">
                  {tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;