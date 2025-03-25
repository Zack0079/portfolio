import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import "../app/globals.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}