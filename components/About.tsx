/*
import React from 'react';
import { PERSONAL_INFO } from '../constants';
import Section from './Section';
import DownloadIcon from './icons/DownloadIcon';

const About: React.FC = () => {
  return (
    <>
      <Section title="About Me">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
            {PERSONAL_INFO.profileSummary}
          </p>
          <a
            href="/Nidhi_Kumar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </Section>

      <Section title="Contact Me">
        <div className="max-w-4xl mx-auto">
           <p className="text-slate-500 dark:text-slate-400 mb-8">
            Have a question or want to work together? Feel free to reach out.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted! (This is a demo)');
            }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="Nidhi Kumar"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default About;
*/

import React from 'react';
import { PERSONAL_INFO } from '../constants';
import Section from './Section';
import DownloadIcon from './icons/DownloadIcon';

const About: React.FC = () => {
  return (
    <>
      {/* 🧍 About Me Section */}
      <Section title="About Me">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <img
            src="/nidhi1.jpg"
            alt="Nidhi Pawan Kumar"
            className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-cyan-400 mb-8 transition-transform duration-300 hover:scale-105"
          />
          
          <p className="text-lg md:text-xl leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
            {PERSONAL_INFO.profileSummary}
          </p> 
          
          <a
            href="/Nidhi_Kumar_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-cyan-500 text-slate-900 font-bold py-3 px-6 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
          >
            <DownloadIcon className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </Section>

      {/* ✉️ Contact Me Section */}
      <Section title="Contact Me">
        <div className="max-w-4xl mx-auto">
          <p className="text-slate-500 dark:text-slate-400 mb-8 text-center">
            Have a question or want to work together? Feel free to reach out.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted! (This is a demo)');
            }}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="Nidhi Kumar"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full bg-slate-100 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-md py-3 px-4 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-cyan-500 text-slate-900 font-bold py-3 px-8 rounded-full hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </Section>
    </>
  );
};

export default About;
