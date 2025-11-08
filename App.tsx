
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import ThemeToggle from './components/ThemeToggle';

export type Page = 'Home' | 'About' | 'Skills' | 'Projects' | 'Experience' | 'Education' | 'Certificates' | 'Achievements';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [isAnimating, setIsAnimating] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    return (localStorage.getItem('theme') as Theme) || 'dark';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  const navigateTo = (page: Page) => {
    if (page !== currentPage) {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage(page);
        setIsAnimating(false);
      }, 300); // Corresponds to animation duration
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <Home navigateTo={navigateTo} />;
      case 'About':
        return <About />;
      case 'Skills':
        return <Skills />;
      case 'Projects':
        return <Projects />;
      case 'Experience':
        return <Experience />;
      case 'Education':
        return <Education />;
      case 'Certificates':
        return <Certificates />;
      case 'Achievements':
        return <Achievements />;
      default:
        return <Home navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-300">
      <Sidebar 
        currentPage={currentPage} 
        navigateTo={navigateTo} 
      />
      <main className="relative flex-1 p-4 md:p-8 lg:p-12 md:ml-20 lg:ml-64">
        <div className="absolute top-4 right-4 z-50">
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        <div className={`transition-opacity duration-300 ease-in-out ${isAnimating ? 'opacity-0' : 'opacity-100'}`}>
          {renderPage()}
        </div>
      </main>
    </div>
  );
};

export default App;
