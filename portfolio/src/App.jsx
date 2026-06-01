import './App.css'
import { useState } from 'react'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import GithubStats from "./components/GithubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Stats from './components/Stats';
import WhyHireMe from './components/WhyHireMe';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats/>
      <About />
      <Skills />
      <Projects />
      <WhyHireMe/>
      <GithubStats />
      <Contact />
      <Footer />
    </>
  );
}

export default App;