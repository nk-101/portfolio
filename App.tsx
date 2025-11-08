
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
import MenuIcon from './components/icons/MenuIcon';

export type Page = 'Home' | 'About' | 'Skills' | 'Projects' | 'Experience' | 'Education' | 'Certificates' | 'Achievements';
export type Theme = 'light' | 'dark';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('Home');
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      setIsMobileMenuOpen(false); // Close menu on navigation
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
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 flex justify-between items-center px-4 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-800 z-40">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 text-slate-500 dark:text-slate-400"
          aria-label="Open menu"
        >
          <MenuIcon className="w-6 h-6" />
        </button>
        <span className="text-lg font-semibold text-slate-900 dark:text-white">{currentPage}</span>
        <div className="w-10 h-10 flex items-center justify-end">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
      </header>
      <main className="relative flex-1 p-4 md:p-8 lg:p-12 md:ml-64 pt-20 md:pt-8 lg:pt-12">
        <div className="absolute top-4 right-4 z-30 hidden md:block">
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
