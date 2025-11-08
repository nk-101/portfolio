import React from 'react';
import { SKILLS_DATA } from '../constants';
import Section from './Section';

const Skills: React.FC = () => {
  return (
    <Section title="My Skills">
      <div className="space-y-8">
        {SKILLS_DATA.map((category) => (
          <div key={category.title}>
            <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="bg-slate-200 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 text-sm font-medium px-4 py-2 rounded-full transition transform hover:scale-105 hover:bg-slate-300 dark:hover:bg-slate-700 cursor-default"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Skills;