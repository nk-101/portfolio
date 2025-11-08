
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


interface SidebarProps {
  currentPage: Page;
  navigateTo: (page: Page) => void;
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
        className={`w-full flex items-center p-4 transition-all duration-300 ease-in-out group ${isActive ? 'text-white dark:text-white' : 'text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'}`}
      >
        <div className={`absolute left-0 w-1 h-full bg-cyan-400 transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100 ${isActive ? 'scale-y-100' : ''}`}></div>
        <Icon className="h-6 w-6 mr-4" />
        <span className={`text-lg font-semibold ${isActive ? 'text-cyan-500 dark:text-cyan-400' : ''}`}>{item.label}</span>
      </button>
    </li>
  );
};

const MobileNavItem: React.FC<{
  item: typeof navItems[0];
  isActive: boolean;
  onClick: () => void;
}> = ({ item, isActive, onClick }) => {
  const activeClasses = 'text-cyan-500 dark:text-cyan-400';
  const inactiveClasses = 'text-slate-500 dark:text-slate-400';
  const Icon = item.icon;

  return (
     <li className="flex-1">
      <button
        onClick={onClick}
        className={`w-full flex flex-col items-center justify-center p-2 transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
      >
        <Icon className="h-6 w-6 mb-1" />
        <span className="text-xs">{item.label}</span>
      </button>
    </li>
  );
};

const Sidebar: React.FC<SidebarProps> = ({ currentPage, navigateTo }) => {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white/80 dark:bg-slate-900/70 backdrop-blur-sm border-r border-slate-200 dark:border-slate-800 fixed h-full">
        <div className="p-8 text-center border-b border-slate-200 dark:border-slate-800">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Nidhi Kumar</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Portfolio</p>
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

      {/* Mobile Bottom Bar */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/90 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-800 z-50">
        <ul className="flex justify-around items-center">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.page}
                item={item}
                isActive={currentPage === item.page}
                onClick={() => navigateTo(item.page)}
              />
            ))}
        </ul>
      </nav>
    </>
  );
};

export default Sidebar;
