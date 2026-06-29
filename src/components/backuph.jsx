import React, { useState, useEffect } from "react";
import "../index.css";

const Hero = () => {
  const textArray = [
    "Frontend Developer",
    "Building clean & responsive websites",
    "Crafting meaningful digital content"
  ];

  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (charIndex < textArray[index].length) {
        setDisplayText((prev) => prev + textArray[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setCharIndex(0);
          setDisplayText("");
          setIndex((prev) => (prev + 1) % textArray.length);
        }, 1500);
      }
    }, 80);
    return () => clearTimeout(timeout);
  }, [charIndex, index, textArray]);

  return (
<section id="home" className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden px-6">

  {/* Subtle Pink Glow Background */}
  <div className="hero-pink-glow"></div>

  {/* Existing Content */}
  <div className="relative z-10 max-w-3xl flex flex-col items-start hero-content">
    <div className="hero-badge">
      ✨ Frontend Developer | Content Writer
    </div> 

    <p className="text-white text-lg mb-2" style={{ fontFamily: "Poppins, sans-serif" }}>
      Hey, I'm
    </p>

    <h1 className="hero-title mb-6 text-left" style={{ color: "#b73c66", fontFamily: "Poppins, sans-serif" }}>
      Mehreen Khalid
    </h1>

    <h2 className="typing-text mb-8 text-left" style={{ fontFamily: "Poppins, sans-serif" }}>
      {displayText}
      <span className="cursor ml-1">|</span>
    </h2>

    <p className="hero-description mb-8 text-left">
      I design and build modern websites that are fast, responsive, and focused on great user experience.
    </p>

    <div className="flex items-center gap-6 mb-8">
      <div className="flex gap-5">
        <a href="#projects" className="btn-primary">View My Work</a>
        <a href="#contact" className="btn-outline">Contact Me</a>
      </div>
    </div>
  </div>

</section>
  );
};

export default Hero;
