import React from 'react';

function Skills() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6">
      {/* Заголовок секції */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">
          Технічні <span className="text-blue-600">навички</span>
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-20"></div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Мови програмування */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-300">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 text-center md:text-left">Мови програмування</h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['C', 'C#', 'Python', 'PHP', 'SQL'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors cursor-default">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Інструменти */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-green-200 dark:hover:border-green-500/50 transition-all duration-300">
          <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 rounded-2xl flex items-center justify-center mb-6 text-green-600 dark:text-green-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 011-1h1a2 2 0 100-4H7a1 1 0 01-1-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 text-center md:text-left">Інструменти</h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['Linux', 'XAMPP', 'Git', 'GitHub', 'WinMIPS64', 'Packet Tracer'].map((tool) => (
              <span key={tool} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-green-500 hover:text-white hover:border-green-500 transition-colors cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Веб-технології */}
        <div className="p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-purple-200 dark:hover:border-purple-500/50 transition-all duration-300">
          <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center mb-6 text-purple-600 dark:text-purple-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-4 text-center md:text-left">Веб-технології</h3>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {['HTML5', 'CSS3', 'Bootstrap', 'Angular', 'React'].map((tech) => (
              <span key={tech} className="px-3 py-1 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-bold rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-purple-500 hover:text-white hover:border-purple-500 transition-colors cursor-default">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;