import React, { useEffect, useRef, useState } from "react";
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
} from "react-icons/fa";
import { Copy, Check, Mail, AlertCircle } from "lucide-react";
import "../index.css";

const EMAIL = "webdevhub67@gmail.com";

const contactInfo = [
  {
    icon: <FaLinkedin />,
    label: "LinkedIn",
    value: "mehreenkhaliddev",
    href: "https://www.linkedin.com/in/mehreenkhaliddev/",
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
  const [sending, setSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const [toast, setToast] = useState({ show: false, msg: "", type: "ok" });

  const toastTimer = useRef(null);
  const copyTimer = useRef(null);
    const subjectRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    return () => {
      clearTimeout(toastTimer.current);
      clearTimeout(copyTimer.current);
    };
  }, []);
  // fills the form when the estimator's "Discuss this project" is clicked
  useEffect(() => {
    const onPrefill = (e) => {
      const { subject, message } = e.detail || {};
      if (subjectRef.current && subject) subjectRef.current.value = subject;
      if (messageRef.current && message) {
        messageRef.current.value = message;
        setTimeout(() => messageRef.current?.focus({ preventScroll: true }), 700);
      }
    };
    window.addEventListener("mk:prefill", onPrefill);
    return () => window.removeEventListener("mk:prefill", onPrefill);
  }, []);
  const showToast = (msg, type = "ok") => {
    clearTimeout(toastTimer.current);
    setToast({ show: true, msg, type });
    toastTimer.current = setTimeout(
      () => setToast((t) => ({ ...t, show: false })),
      2400
    );
  };

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
      } else {
        // fallback for older browsers
        const ta = document.createElement("textarea");
        ta.value = EMAIL;
        ta.setAttribute("readonly", "");
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      setCopied(true);
      clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
      showToast("Email copied to clipboard");
    } catch {
      showToast("Couldn't copy. Please copy it manually.", "error");
    }
  };

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
          showToast("Something went wrong. Please try again.", "error");
        }
      })
      .catch(() => showToast("Something went wrong. Please try again.", "error"))
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="cnt-section">
      {/* heading */}
      <div className="cnt-heading">
        <span className="cnt-label">Contact</span>
        <h2 className="cnt-title">
          Let's Work <span className="cnt-accent">Together</span>
        </h2>
        <p className="cnt-subtitle">
          Have a project in mind or just want to say hello? I'd love to hear
          from you.
        </p>
      </div>

      <div className="cnt-container">
        <div className="cnt-grid">
          {/* ── LEFT ── */}
          <div className="cnt-left">
            <div className="cnt-info-cards">
              {/* EMAIL — 1-click copy */}
              <div className={`cnt-info-card cnt-email ${copied ? "is-copied" : ""}`}>
                <button
                  type="button"
                  className="cnt-hit"
                  onClick={copyEmail}
                  aria-label={`Copy email address ${EMAIL}`}
                />
                <div className="cnt-info-icon">
                  <Mail size={18} />
                </div>
                <div className="cnt-info-text">
                  <span className="cnt-info-label">Email</span>
                  <span className="cnt-info-value">{EMAIL}</span>
                </div>
                <span className="cnt-copy-pill" aria-hidden="true">
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                  {copied ? "Copied" : "Copy"}
                </span>
                <a
                  href={`mailto:${EMAIL}`}
                  className="cnt-mailto"
                  aria-label="Open in your email app"
                  title="Open in email app"
                >
                  <FaArrowRight size={13} />
                </a>
              </div>

              {contactInfo.map((item) =>
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cnt-info-card"
                  >
                    <div className="cnt-info-icon">{item.icon}</div>
                    <div className="cnt-info-text">
                      <span className="cnt-info-label">{item.label}</span>
                      <span className="cnt-info-value">{item.value}</span>
                    </div>
                    <FaArrowRight className="cnt-info-arrow" />
                  </a>
                ) : (
                  <div key={item.label} className="cnt-info-card cnt-static">
                    <div className="cnt-info-icon">{item.icon}</div>
                    <div className="cnt-info-text">
                      <span className="cnt-info-label">{item.label}</span>
                      <span className="cnt-info-value">{item.value}</span>
                    </div>
                  </div>
                )
              )}
            </div>

            {/* availability note */}
            <div className="cnt-avail">
              <span className="cnt-avail-dot" />
              <span>Currently available for freelance &amp; projects</span>
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
              {/* spam trap: real users never see or fill this */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="cnt-hp"
                aria-hidden="true"
              />

              <div className="cnt-form-row">
                <div className="cnt-field">
                  <label htmlFor="cnt-name">Your Name</label>
                  <input id="cnt-name" type="text" name="name" placeholder="Your full name" autoComplete="name" required />
                </div>
                <div className="cnt-field">
                  <label htmlFor="cnt-email">Your Email</label>
                  <input id="cnt-email" type="email" name="email" placeholder="hello@example.com" autoComplete="email" required />
                </div>
              </div>

              <div className="cnt-field">
                <label htmlFor="cnt-subject">Subject</label>
     <input id="cnt-subject" ref={subjectRef} type="text" name="subject" placeholder="Project inquiry..." />
              </div>

              <div className="cnt-field">
                <label htmlFor="cnt-message">Message</label>
<textarea id="cnt-message" ref={messageRef} name="message" rows="5" placeholder="Tell me about your project..." required />              </div>

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

      {/* toast */}
      <div
        className={`cnt-toast ${toast.show ? "show" : ""} ${toast.type === "error" ? "error" : ""}`}
        role="status"
        aria-live="polite"
      >
        {toast.type === "error" ? <AlertCircle size={16} /> : <Check size={16} />}
        <span>{toast.msg}</span>
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