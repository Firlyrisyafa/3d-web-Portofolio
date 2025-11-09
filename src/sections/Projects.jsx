import React from 'react';
import { myProjects } from '../constans';

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-900 to-gray-800 text-white px-6">
      <div className="max-w-6xl">
        <h2 className="text-4xl font-bold mb-8 text-center text-green-400">My Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {myProjects.map((project) => (
            <div key={project.title} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4 text-pink-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag.id} className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
