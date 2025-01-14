import React from 'react';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';
import { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const projectSlug = project.title.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:-translate-y-1">
      <Link to={`/project/${projectSlug}`}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
            {project.inProgress && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm">
                En cours
              </span>
            )}
          </div>
          <p className="text-gray-600 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-indigo-100 text-indigo-600 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
      {project.github && (
        <div className="px-6 pb-6 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Github className="h-5 w-5 mr-2" />
            <span>Voir sur GitHub</span>
          </a>
        </div>
      )}
    </div>
  );
}