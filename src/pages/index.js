import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutAndContact from '../components/AboutAndContact';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Overlap from '@/components/Overlap';
import "../app/globals.css";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;


import Head from "next/head";


export default function Home() {
  return (
    <>
      <Head>
        <title>Zack Tse Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charset="utf-8" data-next-head=""></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap" rel="stylesheet" />
      </Head>
      <div>
        <Overlap />
        {/* <Navbar /> */}
        <Hero />
        {/* <Education />
        <Experience /> */}
        <Skills />
        <Projects />
        <AboutAndContact />
        <Footer />
      </div>
    </>

  );
}