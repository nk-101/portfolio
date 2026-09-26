import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  centered?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, children, centered = false }) => {
  return (
    <section className="py-8 animate-fade-in mb-16">
      <div className={`relative mb-8 ${centered ? 'text-center' : ''}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white relative z-10 inline-block">
          {title}
        </h2>

        <div
          className={`absolute -bottom-1 h-1.5 bg-cyan-400/50 rounded-full ${
            centered
              ? 'left-1/2 -translate-x-1/2 w-24'
              : 'left-0 w-full'
          }`}
        ></div>
      </div>

      <div>{children}</div>
    </section>
  );
};

export default Section;
/* import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="py-8 animate-fade-in mb-16">
      <div className="relative inline-block mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white relative z-10">{title}</h2>
        <div className="absolute -bottom-1 left-0 h-1.5 w-full bg-cyan-400/50 rounded-full"></div>
      </div>
      <div>{children}</div>
    </section>
  );
};

export default Section; */
