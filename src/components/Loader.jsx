
import React, { useEffect, useState } from "react";
import "../index.css";

const Loader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const interval = 20;
    const total = duration / interval;

    let current = 0;

    const timer = setInterval(() => {
      current++;

      const value = Math.min(
        Math.round((current / total) * 100),
        100
      );

      setProgress(value);

      if (value >= 100) {
        clearInterval(timer);

        setTimeout(() => {
          onFinish();
        }, 250);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onFinish]);

  return (
    <div className="portfolio-loader">

      {/* background glow */}
      <div className="loader-glow glow-one"></div>
      <div className="loader-glow glow-two"></div>

      {/* content */}
      <div className="loader-content">

        <p className="loader-subtitle">
Where Design Meets Functionality        </p>

        <div className="portfolio-text-wrap">

          <h1 className="portfolio-text">
            PORTFOLIO
          </h1>

          <div className="metal-letter">
            M
          </div>

        </div>

        <h2 className="loader-name">
          Mehreen
        </h2>

        <p className="loader-role">
          Frontend Developer & Writer
        </p>

        <div className="loader-progress">
          <div
            className="loader-progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

      </div>

    </div>
  );
};

export default Loader;





