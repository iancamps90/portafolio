// src/App.jsx
import React from "react";
import Intro from "./sections/Intro";
import AboutTimeline from "./sections/AboutTimeline";
import SkillsShowcase from "./sections/SkillsShowcase";
import FooterContact from "./sections/FooterContact.jsx";
import ProjectsCarousel from "./sections/ProjectsCarousel";
import './index.css'

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Intro />
      <AboutTimeline />
      <SkillsShowcase />
      <ProjectsCarousel />
      <FooterContact />
    </div>
  );
}

export default App;


