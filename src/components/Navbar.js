import Link from 'next/link';
import { useEffect } from 'react';


export default function Navbar() {
  useEffect(() => {
    const links = document.querySelector('nav').querySelectorAll('a[href^="/"]');

    links.forEach((link, index) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();

        let height = 0;
        let targetElement = null;
        // console.log("link:", index);


        if (index != 0) {
          let targetId = link.getAttribute('href').substring(2);
          targetElement = document.getElementById(targetId);
          height = targetElement.offsetTop - 100; // Adjust for the height of the navbar
        }else {
          targetElement = document.getElementById('nav');
        }

        window.scrollTo({
          top: height,
          behavior: 'smooth',
        });

      });
    });
  }, []);

  return (
    <nav id="nav" className="bg-gray-800 p-4 sticky top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          My Portfolio
        </Link>
        <div className="space-x-4">
          <Link href="#about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="#education" className="text-gray-300 hover:text-white">
            Education
          </Link>
          <Link href="#experience" className="text-gray-300 hover:text-white">
            Experience
          </Link>
          <Link href="#skills" className="text-gray-300 hover:text-white">
            Skills
          </Link>
          <Link href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}