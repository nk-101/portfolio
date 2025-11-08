
import React, { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../constants';
import type { Page } from '../App';
import GithubIcon from './icons/GithubIcon';
import LinkedinIcon from './icons/LinkedinIcon';

interface HomeProps {
  navigateTo: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ navigateTo }) => {
  const [typedTitle, setTypedTitle] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const titles = [PERSONAL_INFO.title, "AI/ML Enthusiast", "Full Stack Developer"];

  useEffect(() => {
    const handleTyping = () => {
      const i = loopNum % titles.length;
      const fullTxt = titles[i];

      setTypedTitle(
        isDeleting
          ? fullTxt.substring(0, typedTitle.length - 1)
          // Speed up typing
          : fullTxt.substring(0, typedTitle.length + 1)
      );

      if (!isDeleting && typedTitle === fullTxt) {
        // Reduce pause before deleting
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && typedTitle === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    // Increase deleting and typing speed
    const typingSpeed = isDeleting ? 30 : 60;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedTitle, isDeleting, loopNum, titles]);

  return (
    <div className="flex items-center justify-center min-h-[80vh] text-center">
      <div className="animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-4">
          {PERSONAL_INFO.name}
        </h1>
        <p className="text-2xl md:text-3xl text-cyan-500 dark:text-cyan-400 font-medium mb-8 h-10">
          <span>{typedTitle}</span>
          <span className="animate-pulse">|</span>
        </p>
        <div className="flex justify-center items-center space-x-6 mb-12">
          <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300">
            <GithubIcon className="w-8 h-8" />
          </a>
          <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-300">
            <LinkedinIcon className="w-8 h-8" />
          </a>
        </div>
        <button
          onClick={() => navigateTo('Projects')}
          className="bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
        >
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Home;
