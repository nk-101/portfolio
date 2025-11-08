import React from 'react';
import { PROJECTS_DATA } from '../constants';
import Section from './Section';

const Projects: React.FC = () => {
  return (
    <Section title="Projects">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/10 dark:hover:shadow-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 border border-slate-200 dark:border-transparent"
          >
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs bg-slate-200 dark:bg-slate-700 text-cyan-700 dark:text-cyan-400 px-2 py-1 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
};

export default Projects;