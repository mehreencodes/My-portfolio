import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import "../index.css";

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: "Email",
    value: "khalidmehri65@gmail.com",
    href: "mailto:khalidmehri65@gmail.com",
  },
  {
    icon: <FaPhoneAlt />,
    label: "Phone",
    value: "+92 341 5331407",
    href: "tel:+923415331407",
  },
  {
    icon: <FaMapMarkerAlt />,
    label: "Location",
    value: "Jhelum, Punjab, Pakistan",
    href: null,
  },
];

const Contact = () => {
  const [showSuccess, setShowSuccess] = useState(false);
  const [sending, setSending]         = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setSending(true);

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" },
    })
      .then((res) => {
        if (res.ok) {
          setShowSuccess(true);
          form.reset();
        } else {
          alert("Oops! Something went wrong.");
        }
      })
      .catch(() => alert("Oops! Something went wrong."))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="cnt-section">

      {/* heading */}
      <div className="cnt-heading">
        <span className="cnt-label">Contact</span>
        <h2 className="cnt-title">Let's Work Together</h2>
        <p className="cnt-subtitle">
          Have a project in mind or just want to say hello?
          I'd love to hear from you.
        </p>
      </div>

      <div className="cnt-container">
        <div className="cnt-grid">

          {/* ── LEFT ── */}
          <div className="cnt-left">

            <div className="cnt-info-cards">
              {contactInfo.map((item, i) => (
                item.href ? (
                  <a key={i} href={item.href} className="cnt-info-card">
                    <div className="cnt-info-icon">{item.icon}</div>
                    <div className="cnt-info-text">
                      <span className="cnt-info-label">{item.label}</span>
                      <span className="cnt-info-value">{item.value}</span>
                    </div>
                    <FaArrowRight className="cnt-info-arrow" />
                  </a>
                ) : (
                  <div key={i} className="cnt-info-card">
                    <div className="cnt-info-icon">{item.icon}</div>
                    <div className="cnt-info-text">
                      <span className="cnt-info-label">{item.label}</span>
                      <span className="cnt-info-value">{item.value}</span>
                    </div>
                    <FaArrowRight className="cnt-info-arrow" />
                  </div>
                )
              ))}
            </div>

            {/* availability note */}
            <div className="cnt-avail">
              <span className="cnt-avail-dot" />
              <span>Currently available for freelance & projects</span>
            </div>

          </div>

          {/* ── RIGHT FORM ── */}
          <div className="cnt-form-wrap">
            <form
              action="https://formspree.io/f/mpwlwgbr"
              method="POST"
              className="cnt-form"
              onSubmit={handleSubmit}
            >
              <div className="cnt-form-row">
                <div className="cnt-field">
                  <label>Your Name</label>
                  <input type="text" name="name" placeholder="Mehreen Khalid" required />
                </div>
                <div className="cnt-field">
                  <label>Your Email</label>
                  <input type="email" name="email" placeholder="hello@example.com" required />
                </div>
              </div>

              <div className="cnt-field">
                <label>Subject</label>
                <input type="text" name="subject" placeholder="Project inquiry..." />
              </div>

              <div className="cnt-field">
                <label>Message</label>
                <textarea name="message" rows="5" placeholder="Tell me about your project..." required />
              </div>

              <button type="submit" className="cnt-submit" disabled={sending}>
                {sending ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <FaPaperPlane size={13} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* success popup */}
      {showSuccess && (
        <div className="cnt-success-overlay" onClick={() => setShowSuccess(false)}>
          <div className="cnt-success-card" onClick={(e) => e.stopPropagation()}>
            <FaCheckCircle className="cnt-success-icon" />
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I'll get back to you soon.</p>
            <button onClick={() => setShowSuccess(false)}>Done</button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Contact;