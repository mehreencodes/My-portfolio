import React, { useState, lazy, Suspense } from "react";

import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Hero   from "./components/Hero";

// lazy load — sirf tab load honge jab user scroll kare
const AboutMe   = lazy(() => import("./components/About"));
const Education = lazy(() => import("./components/Education"));
const Skills    = lazy(() => import("./components/Skills"));
const Projects  = lazy(() => import("./components/Projects"));
const Contact   = lazy(() => import("./components/Contact"));
const Footer    = lazy(() => import("./components/Footer"));

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Loader onFinish={() => setLoading(false)} />}

      <div style={{ opacity: loading ? 0 : 1, transition: "opacity 0.4s ease" }}>
        <Navbar />
        <Hero />
        <Suspense fallback={null}>
          <AboutMe />
          <Education />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </Suspense>
      </div>
    </>
  );
};

export default App;