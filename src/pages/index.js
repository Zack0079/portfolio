import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Temp from '../components/temp';
import Overlap from '@/components/Overlap';
import "../app/globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <div>
      <Overlap />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
      {/* <Temp /> */}
    </div>
  );
}