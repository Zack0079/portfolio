import { CommandLineIcon } from '@heroicons/react/24/solid'
import MultiCardCarousel from './common/carousel';
import "../app/projects.css";



export default function Projects() {
  const projects = [
    {
      title: 'Profolio Website',
      type: 'Website',
      description: 'My Profolio Website.',
      tools: {
        'Languages': ['JavaScript', 'HTML & CSS'],
        'Frameworks & Libraries': ['React.js', 'Next.js', 'Tailwind CSS'],
        'Platforms': ['GitHub Pages', 'Vercel'],
      },
      role: ['Frontend', 'Backend', 'Design', 'DevOps'],
      image: "assets/images/PortfolioScreen.png",
      link: 'https://github.com/Zack0079/portfolio',
      linkName: 'GitHub'
    },
    {
      title: 'Diary Web App',
      type: 'Web App',
      description: 'Collaborated with Johnny Wong on a Diary Web App.',
      tools: {
        'Languages': ['TypeScript', 'HTML & CSS', 'Java'],
        'Frameworks & Libraries': ['React', 'Tailwind CSS', 'Spring Boot'],
        'Database': ['MongoDB'],
        'DevOps': ['Docker'],
      },
      role: ['Frontend', 'Backend (50%)', 'Design (50%)'],
      image: "assets/images/DiaryScreen.png",
      link: 'https://github.com/johnnypwong/diary-app',
      linkName: 'GitHub'
    },
    {
      title: "Wall City Daoist Priest",
      type: 'Game',
      description: 'A 2D action-platformer game developed using Unity.',
      tools: {
        'Game Engine': ['Unity'],
        'Game Programming': ['C# Scripting'],
        'Modeling & Animation': ['Tilemap', 'Aseprite'],
      },
      role: ['Game Design', 'Level Design', 'Character Design', 'Game Programming'],
      image: "assets/images/GameScreen.png",
      link: 'https://play.unity.com/en/games/34af82e6-ab69-473a-804e-4f7701631110/build',
      linkName: 'Play Game'
    }
  ];




  return (
    <section id="projects" className="bg-gray-900 py-16">
      <div className="container mx-auto text-center bg-gray-900">
        <h2 className="text-3xl text-white font-bold mb-8">My Projects</h2>

        <div className="slider-container w-8/12 mx-auto text-white">
          <MultiCardCarousel projects={projects} />
        </div>

      </div>
    </section>
  );
}