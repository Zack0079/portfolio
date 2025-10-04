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
    <section id="hero" className="bg-gray-900 text-white h-screen">


      <div className=" flex flex-col items-center justify-center w-full h-full mx-auto text-center">
        <h1 className="text-8xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-5xl font-extrabold text-transparent ">Zack Tse</h1>
        {/* <p className="text-lg mb-8 ">I am Full-Stack Developer and DevOps. Have 5 yaers of experience.<br/>
            I have developed different applications software with different tectnologies.<br/>
            Also, I love learn new technologies and skills and share with others.<br/>
            Please feel free to reach me. </p> */}
        <p className="text-lg text-gray-300">

          Passionate about learning new technologies and skills<br />
        </p>

        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Full-Stack Developer</h2>
          <div className="text-gray-300 flex flex-row justify-center space-x-4 mb-4">
            {
              full_stack_tech && (
                full_stack_tech.map((tech, index) => (
                  <button key={index} className="md:text-xl md:font-bold rounded-full outline-2 px-3 py-1  hover:text-white">{tech}</button>
                ))
              )}
          </div>
        </div>


        <div className="mt-8">
          <h2 className="text-3xl font-bold mb-4">Game Developer</h2>
          <div className="text-gray-300 flex flex-row justify-center space-x-4 mb-4">
            {
              game_dev_tech && (
                game_dev_tech.map((tech, index) => (
                  <button key={index} className="md:text-xl md:font-bold rounded-full outline-2 px-3 py-1">{tech}</button>
                ))
              )}
          </div>
        </div>


        <div className="md:text-xl  text-gray-100 mt-8 flex flex-row justify-center space-x-4 mb-4">
          <button className="rounded-full bg-gray-600 px-3 py-2 text-gray-300  hover:text-white">View My Work</button>
          <a href="#contact" className="rounded-full bg-gray-600 px-3 py-2 text-gray-300  hover:text-white">
            <span>Contact</span>
          </a>

          <a href="https://github.com/Zack0079" target="_blank" className="rounded-full bg-gray-600 px-3 py-2 text-gray-300  hover:text-white">
            <span>GitHub</span>
          </a>
        </div>

        <div className="absolute text-gray-300 bottom-10 flex flex-col text-xl items-center animate-bounce">
          <span className="text-gray-300 bottom-0">Scroll Down</span>
          <FontAwesomeIcon icon={faArrowDown} />
        </div>

      </div>

      <div id="icon_bk" className="z-0 top-0 left-0 w-dvh h-dvh hidden xl:block">
        {icon_bk.map((icon, index) => (
          <img key={index} src={`/assets/icons/${icon}.png`} alt="background icon" className={`absolute float-bob ${icon_pos[index]} size-15`} />
        ))}
      </div>
      {/* <a
          href="#contact"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Contact Me
        </a> */}
    </section>
  );
}