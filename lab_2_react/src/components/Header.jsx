import React from 'react';

function Header({ toggleTheme, theme }) {
  return (
    <header className="relative bg-gradient-to-b from-white to-blue-100 dark:bg-none dark:bg-slate-950 text-slate-900 dark:text-white py-16 px-6 text-center shadow-2xl border-b border-slate-200 dark:border-blue-500/20 overflow-hidden transition-colors duration-500">
      <div className="absolute inset-0 opacity-20 dark:opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-600 via-transparent to-transparent dark:from-blue-500"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        
        <div className="flex justify-end mb-6">
          <button 
            onClick={toggleTheme}
            className="flex items-center gap-2 px-5 py-2.5 bg-slate-100 dark:bg-slate-900/60 backdrop-blur-md border border-slate-200 dark:border-slate-800 rounded-2xl hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group"
          >
            <span className="text-blue-600 dark:text-blue-400 group-hover:rotate-12 transition-transform duration-300">
              {theme === 'light' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" /></svg>
              )}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-600 dark:text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {theme === 'light' ? 'Night Mode' : 'Day Mode'}
            </span>
          </button>
        </div>

        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 bg-gradient-to-br from-blue-700 via-blue-500 to-indigo-700 dark:from-blue-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent uppercase drop-shadow-xl">
            Завадська Діана
        </h1>
      
        <div className="inline-block px-6 py-2 border border-blue-600/20 dark:border-blue-500/30 rounded-full bg-blue-500/5 backdrop-blur-sm mb-10">
          <p className="text-blue-700 dark:text-blue-400 text-lg md:text-xl font-mono tracking-widest flex items-center justify-center gap-3">
            <span className="animate-bounce">●</span> Студентка 3-го курсу кафедри Кібербезпеки
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-4 text-sm">
          <li>
            <a 
              href="mailto:diana.zavadska.kb.2023@lpnu.ua" 
              className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full hover:border-blue-500 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-white transition-all duration-300 flex items-center gap-2 shadow-sm dark:shadow-none"
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold">@</span> Email
            </a>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/diana-zavadska-4764aa379/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full hover:border-blue-500 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-white transition-all duration-300 flex items-center gap-2 shadow-sm dark:shadow-none"
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold">in</span> LinkedIn
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/Diana-Zavadska" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full hover:border-blue-500 hover:bg-white dark:hover:bg-slate-800 text-slate-700 dark:text-white transition-all duration-300 flex items-center gap-2 shadow-sm dark:shadow-none"
            >
              <span className="text-blue-600 dark:text-blue-400 font-bold">git</span> GitHub
            </a>
          </li>
          <li className="px-5 py-2.5 bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-full text-slate-700 dark:text-slate-300 flex items-center gap-2 shadow-sm dark:shadow-none">
            <span className="text-blue-600 dark:text-blue-400 font-bold">loc</span> Львів, Україна
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;