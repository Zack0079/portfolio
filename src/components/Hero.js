import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import "../app/hero.css";

export default function Hero() {
  const full_stack_tech = ["JavaScript", "TypeScript", "HTML & CSS", "React", "Node.js"];
  const game_dev_tech = ["Unity", "Unreal", "Blender"];
  const icon_pos = ["top-3/5 left-3/4", "top-1/3 right-3/4", "bottom-3/4 left-2/3", "top-3/4 left-1/3", "top-4/5 left-3/5 "];

  const [icon_bk, set_icon_bk] = useState(["computer", "fairytale", "sports", "gundam", "game-console"]);

  const shuffleArray = (array) => {
    // Create a shallow copy to avoid modifying the original ALL_ICONS array
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]; // Swap elements
    }
    return shuffled;
  };

  useEffect(() => {
    set_icon_bk(shuffleArray(icon_bk));
  }, []);

  return (
    <section id="hero" className="relative bg-gray-900 text-white min-h-dvh w-screen flex flex-col px-4 sm:px-6 md:px-8 pt-12 lg:pt-0">


      <div id="hero-content" className="relative z-1 flex-1 flex flex-col justify-center items-center text-center">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text font-extrabold text-transparent">Zack Tse</h1>
          <p className="text-base sm:text-lg text-gray-300">
            {/* I am Full-Stack Developer and DevOps. Have 5 yaers of experience.<br/>
            I have developed different applications software with different tectnologies.<br/>
            Also, I love learn new technologies and skills and share with others.<br/>
            Please feel free to reach me.*/}

            Passionate about learning new technologies and skills<br />
          </p>

          <div className="mt-8 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Full-Stack Developer</h2>
            <div className="text-gray-300 flex flex-row flex-wrap justify-center gap-3 mb-4">
              {
                full_stack_tech && (
                  full_stack_tech.map((tech, index) => (
                    <button key={index} className="text-sm sm:text-base md:text-xl md:font-bold rounded-full outline-2 px-3 py-1  hover:text-white">{tech}</button>
                  ))
                )}
            </div>
          </div>


          <div className="mt-8 w-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Game Developer</h2>
            <div className="text-gray-300 flex flex-row flex-wrap justify-center gap-3 mb-4">
              {
                game_dev_tech && (
                  game_dev_tech.map((tech, index) => (
                    <button key={index} className="text-sm sm:text-base md:text-xl md:font-bold rounded-full outline-2 px-3 py-1">{tech}</button>
                  ))
                )}
            </div>
          </div>

          <div className="z-1 text-base md:text-xl text-gray-100 mt-8 flex flex-col md:flex-row flex-wrap justify-center gap-3 mb-4">
            <a href="#projects" className="rounded-full bg-gray-600 px-3 py-2 text-gray-300  hover:text-white">
              <span>View My Work</span>
            </a>

            <a href="#contact" className="rounded-full bg-gray-600 px-3 py-2 text-gray-300  hover:text-white">
              <span>Contact</span>
            </a>

            <a href="https://github.com/Zack0079" target="_blank" className="rounded-full bg-gray-600 px-3 py-2 text-gray-300  hover:text-white">
              <span>GitHub</span>
            </a>
          </div>
        </div>


        <div className="relative z-1 w-full text-center items-center animate-bounce text-gray-300 py-4 lg:py-8 text-lg sm:text-xl">
          <span className="text-gray-300 bottom-0">Scroll Down</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>

      </div>

      <div id="icon_bk" className="absolute inset-0 z-0 w-full h-full hidden xl:block">
        {icon_bk.map((icon, index) => (
          <img key={index} src={`/assets/icons/${icon}.png`} alt="background icon" className={`absolute float-bob ${icon_pos[index]} size-15`} />
        ))}
      </div>
    </section>
  );
}