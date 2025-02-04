// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './index.css'

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;

