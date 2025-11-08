import React from 'react';
import { EDUCATION_DATA } from '../constants';
import Section from './Section';

const Education: React.FC = () => {
  return (
    <Section title="Education">
      <div className="space-y-8">
        {EDUCATION_DATA.map((edu, index) => (
          <div key={index} className="bg-slate-50 dark:bg-slate-800 rounded-lg p-6 shadow-lg transition-shadow hover:shadow-cyan-500/10 border border-slate-200 dark:border-transparent">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{edu.institution}</h3>
                <p className="text-cyan-600 dark:text-cyan-400">{edu.degree}</p>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-right text-sm">{edu.year}</p>
            </div>
            <p className="text-slate-700 dark:text-slate-300 mt-2">{edu.result}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Education;