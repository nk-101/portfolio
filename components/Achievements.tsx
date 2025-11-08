
import React from 'react';
import { ACHIEVEMENTS_DATA } from '../constants';
import Section from './Section';
import TrophyIcon from './icons/TrophyIcon';

const Achievements: React.FC = () => {
  return (
    <Section title="Achievements">
      <div className="space-y-6">
        {ACHIEVEMENTS_DATA.map((achievement, index) => (
          <div key={index} className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-lg shadow-sm transition-shadow hover:shadow-cyan-500/10 border border-slate-200 dark:border-transparent">
            <div className="flex-shrink-0">
              <TrophyIcon className="h-6 w-6 text-cyan-500 dark:text-cyan-400 mt-1" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">{achievement.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 mt-1">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Achievements;
