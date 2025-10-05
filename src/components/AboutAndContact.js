import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AtSymbolIcon } from '@heroicons/react/24/solid'

export default function AboutAndContact() {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container items-center justify-center mx-auto text-center w-full h-full flex  md:flex-row sm:flex-col gap-16 ">

        <div className="flex flex-col text-start" >
          <h2 className="text-3xl font-bold mb-8 ">About Me</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Full Name: Cheung Yuet Tse <span className="ml-5">(Preferred Name: Zack)</span></li>
            <li>Love learning new skills and exploring emerging technologies.</li>
            <li>Fast learner and adaptable to new challenges.</li>
            <li>Otaku: like Video games, anime, and board games</li>
          </ul>
        <a href="/assets/resume_CYT.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:underline shrink-0 rounded-full px-3 py-2 text-lg font-bold hover:text-orange-300 w-fit mt-4">
           View My Resume
        </a>
      </div>

        <div className="shrink-0 flex flex-col items-start" >
          <h2 className="text-3xl font-bold mb-8 ">Contact Me</h2>
          <div className="flex flex-col space-y-4 ">
            <a href="https://github.com/Zack0079" className="flex items-center space-x-2 hover:text-orange-300">
              <FaGithub className="w-6 h-6" />
              <span>Zack0079</span>
            </a>
            <a href="https://www.linkedin.com/in/zackcyt/" className="flex items-center space-x-2 hover:text-orange-300">
              <FaLinkedin className="w-6 h-6" />
              <span>Zack Tse</span>
            </a>
            <a href="mailto:zackmoonca@gmail.com" className="flex items-center space-x-2 hover:text-orange-300">
              <AtSymbolIcon className="w-6 h-6" />
              <span>zackmoonca@gmail.com</span>
            </a>
          </div>
        </div>


      </div>

    </section>
  );
}