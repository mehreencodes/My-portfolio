import React, { useEffect, useRef, useState } from "react";
import "../index.css";

const DURATION = 650;          // ms for the bar to fill
const EXIT = 450;              // ms for the fade-out
const ONCE_PER_SESSION = true; // set true to skip the loader on repeat visits in the same tab

const seenBefore = () => {
  try {
    return ONCE_PER_SESSION && sessionStorage.getItem("mk-loaded") === "1";
  } catch {
    return false;
  }
};

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [skip] = useState(seenBefore);
  const finishRef = useRef(onFinish);

  // always call the latest onFinish without restarting the timer
  useEffect(() => {
    finishRef.current = onFinish;
  });

  useEffect(() => {
    if (skip) {
      finishRef.current?.();
      return;
    }

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = reduce ? 200 : DURATION;
    const exit = reduce ? 0 : EXIT;

    let raf;
    let t1;
    let t2;
    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      setProgress(Math.round(p * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        t1 = setTimeout(() => {
          setLeaving(true);
          t2 = setTimeout(() => {
            try {
              if (ONCE_PER_SESSION) sessionStorage.setItem("mk-loaded", "1");
            } catch {}
            finishRef.current?.();
          }, exit);
        }, 150);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [skip]);

  if (skip) return null;

  return (
    <div className={`ld ${leaving ? "ld-leave" : ""}`}>
      <div className="ld-glow ld-glow-a" />
      <div className="ld-glow ld-glow-b" />
      <div className="ld-glow-c" />

      <div className="ld-content">
        <p className="ld-sub">Where Design Meets Functionality</p>

        <div className="ld-title">PORTFOLIO</div>

        <p className="ld-name">Mehreen</p>
        <p className="ld-role">React.js &amp; Website Developer</p>

        <div className="ld-bar-wrap">
          <div
            className="ld-bar"
            role="progressbar"
            aria-label="Loading portfolio"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={progress}
          >
            <div className="ld-fill" style={{ width: `${progress}%` }} />
          </div>
          <span className="ld-pct">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;