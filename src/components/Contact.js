import { FaGithub, FaLinkedin  } from "react-icons/fa";
import { AtSymbolIcon } from '@heroicons/react/24/solid'

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Contact Me</h2>
        <div className="flex justify-center space-x-8">
          <a href="https://github.com/Zack0079" className="flex items-center space-x-2 hover:text-orange-300">
            <FaGithub className="w-6 h-6"  />
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
    </section>
  );
}