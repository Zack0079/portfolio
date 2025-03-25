import { CommandLineIcon } from '@heroicons/react/24/solid'

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of project 1.',
      link: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of project 2.',
      link: '#',
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <CommandLineIcon  className="w-8 h-8 mx-auto mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-500 hover:underline"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}