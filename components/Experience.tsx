import React from 'react';
import { EXPERIENCE_DATA } from '../constants';
import Section from './Section';

const Experience: React.FC = () => {
  return (
    <Section title="Experience">
      <div className="relative border-l-2 border-slate-200 dark:border-slate-700 pl-8 space-y-12">
        <div className="absolute top-0 -left-[2px] w-0.5 h-full bg-cyan-400 animate-line-draw"></div>
        {EXPERIENCE_DATA.map((exp, index) => (
          <div key={index} className="relative">
            <div className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-400"></div>
            <p className="text-sm text-slate-500 dark:text-slate-400 mb-1">{exp.duration}</p>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
            <p className="text-md text-cyan-600 dark:text-cyan-400 mb-3">{exp.company}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
              {exp.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Experience;