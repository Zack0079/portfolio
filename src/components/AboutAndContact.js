import { FaGithub, FaLinkedin } from "react-icons/fa";
import { AtSymbolIcon } from '@heroicons/react/24/solid'

export default function AboutAndContact() {
  return (
    <section id="contact" className="py-12 sm:py-16 bg-gray-800 text-white">
      <div className="max-w-5xl items-center justify-center mx-auto text-center w-full flex flex-col md:flex-row gap-10 md:gap-16 px-4 sm:px-6 md:px-8">

        <div className="flex flex-col text-left w-full max-w-md md:max-w-xl md:flex-1 mx-auto md:mx-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center">About Me</h2>
          <ul className="list-disc list-outside pl-5 space-y-2 sm:space-y-3 text-base sm:text-lg">
            <li>Full Name: Cheung Yuet Tse <span className="block sm:inline sm:ml-5">(Preferred Name: Zack)</span></li>
            <li>Love learning new skills and exploring emerging technologies.</li>
            <li>Fast learner and adaptable to new challenges.</li>
            <li>Otaku: like Video games, anime, and board games</li>
          </ul>
          <a href="/assets/resume_CYT.pdf" target="_blank" rel="noopener noreferrer" className="bg-gray-700 hover:underline shrink-0 rounded-full px-3 py-2 text-base sm:text-lg font-bold hover:text-orange-300 w-fit mt-4 mx-auto md:mx-0">
            View My Resume
          </a>
        </div>

        <div className="flex flex-col items-center w-full max-w-md mx-auto md:w-auto md:max-w-none md:shrink-0 md:grow-0">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Contact Me</h2>
          <div className="flex flex-col items-start space-y-4 text-sm sm:text-base">
            <a href="https://github.com/Zack0079" className="flex items-center space-x-2 hover:text-orange-300 break-words md:whitespace-nowrap">
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span>Zack0079</span>
            </a>
            <a href="https://www.linkedin.com/in/zackcyt/" className="flex items-center space-x-2 hover:text-orange-300 break-words md:whitespace-nowrap">
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span>Zack Tse</span>
            </a>
            <a href="mailto:zackmoonca@gmail.com" className="flex items-center space-x-2 hover:text-orange-300 break-all md:whitespace-nowrap">
              <AtSymbolIcon className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
              <span>zackmoonca@gmail.com</span>
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}