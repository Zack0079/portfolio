import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4 sticky top-0">
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