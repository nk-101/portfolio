import React from 'react';
import type { Page } from '../App';
import HomeIcon from './icons/HomeIcon';
import UserIcon from './icons/UserIcon';
import CodeIcon from './icons/CodeIcon';
import ProjectIcon from './icons/ProjectIcon';
import BriefcaseIcon from './icons/BriefcaseIcon';
import GraduationCapIcon from './icons/GraduationCapIcon';
import AwardIcon from './icons/AwardIcon';
import TrophyIcon from './icons/TrophyIcon';
import XIcon from './icons/XIcon'; // ✅ Correct import

interface SidebarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

const navItems: { page: Page; icon: React.FC<any>; label: string }[] = [
  { page: 'Home', icon: HomeIcon, label: 'Home' },
  { page: 'About', icon: UserIcon, label: 'About' },
  { page: 'Projects', icon: ProjectIcon, label: 'Projects' },
  { page: 'Skills', icon: CodeIcon, label: 'Skills' },
  { page: 'Experience', icon: BriefcaseIcon, label: 'Experience' },
  { page: 'Certificates', icon: AwardIcon, label: 'Certificates' },
  { page: 'Education', icon: GraduationCapIcon, label: 'Education' },
  { page: 'Achievements', icon: TrophyIcon, label: 'Achievements' },
];

const NavItem: React.FC<{
  item: typeof navItems[0];
  isActive: boolean;
  onClick: () => void;
}> = ({ item, isActive, onClick }) => {
  const Icon = item.icon;
  return (
    <li className="hidden md:block">
      <button
        onClick={onClick}
        className={`w-full flex items-center p-4 transition-all duration-300 ease-in-out group ${
          isActive
            ? 'text-white dark:text-white'
            : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
        }`}
      >
        <div
          className={`absolute left-0 w-1 h-full bg-cyan-400 transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100 ${
            isActive ? 'scale-y-100' : ''
          }`}
        ></div>
        <Icon className="h-6 w-6 mr-4" />
        <span
          className={`text-lg font-semibold ${
            isActive ? 'text-cyan-500 dark:text-cyan-400' : ''
          }`}
        >
          {item.label}
        </span>
      </button>
    </li>
  );
};

const MobileSlideNavItem: React.FC<{
  item: typeof navItems[0];
  isActive: boolean;
  onClick: () => void;
}> = ({ item, isActive, onClick }) => {
  const Icon = item.icon;
  return (
    <li>
      <button
        onClick={onClick}
        className={`w-full flex items-center p-4 text-lg transition-colors duration-200 ${
          isActive
            ? 'text-cyan-500 dark:text-cyan-400 bg-slate-100 dark:bg-slate-800'
            : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
        }`}
      >
        <Icon className="h-5 w-5 mr-4" />
        <span className="font-medium">{item.label}</span>
      </button>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({
  currentPage,
  navigateTo,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm border-r border-slate-200 dark:border-slate-800 fixed h-full z-20">
        <div className="p-8 text-center border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
            Nidhi Kumar
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Portfolio
          </p>
        </div>
        <nav className="flex-1 mt-8">
          <ul>
            {navItems.map((item) => (
              <NavItem
                key={item.page}
                item={item}
                isActive={currentPage === item.page}
                onClick={() => navigateTo(item.page)}
              />
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile Sliding Menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 transition-opacity duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        ></div>

        {/* Menu Panel */}
        <aside
          className={`relative flex flex-col w-64 max-w-[80vw] bg-white dark:bg-slate-900 h-full shadow-xl transition-transform duration-300 ease-in-out transform ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b border-slate-200 dark:border-slate-800">
            <div className="text-left">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">
                Nidhi Kumar
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Portfolio
              </p>
            </div>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 text-slate-500 dark:text-slate-400"
              aria-label="Close menu"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 mt-4 overflow-y-auto">
            <ul>
              {navItems.map((item) => (
                <MobileSlideNavItem
                  key={item.page}
                  item={item}
                  isActive={currentPage === item.page}
                  onClick={() => navigateTo(item.page)}
                />
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;
