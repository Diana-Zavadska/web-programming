import React from 'react';

function Experience() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6">
      {/* Заголовок секції */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">
          Навчальні <span className="text-blue-600">проєкти</span>
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-20"></div>
      </div>

      <div className="grid gap-8">
        {/* Проєкт 1: Сайт-резюме */}
        <article className="group p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              Розробка персонального сайту-резюме
            </h3>
            <span className="text-slate-400 dark:text-slate-500 font-mono text-sm bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-100 dark:border-slate-700">
              Лютий 2026 – Тепер
            </span>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-1">▹</span>
              Створення семантичної структури сайту на HTML5.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-1">▹</span>
              Використання React для створення компонентної архітектури.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-500 font-bold mt-1">▹</span>
              Керування версіями коду за допомогою Git та GitHub.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-md border border-blue-100 dark:border-blue-800">React</span>
            <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-400 text-xs font-semibold rounded-md border border-cyan-100 dark:border-cyan-800">Tailwind CSS</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700">Vite</span>
          </div>
        </article>

        {/* Проєкт 2: Система шифрування */}
        <article className="group p-8 bg-slate-950 text-white rounded-3xl shadow-xl border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl rounded-full"></div>
          <div className="relative z-10 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-xl font-bold text-blue-400">
                Система шифрування (Parallel Computing)
              </h3>
              <span className="text-slate-500 font-mono text-sm">
                12/2025 – 01/2026
              </span>
            </div>
            <ul className="space-y-2 text-slate-400 mb-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-1">#</span>
                Реалізація алгоритму шифрування на GPU з використанням CUDA/OpenCL.
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 font-bold mt-1">#</span>
                Оптимізація обчислень для роботи з великими обсягами даних.
              </li>
            </ul>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-900/40 text-blue-300 text-xs font-semibold rounded-md border border-blue-800">CUDA</span>
              <span className="px-3 py-1 bg-blue-900/40 text-blue-300 text-xs font-semibold rounded-md border border-blue-800">C++</span>
              <span className="px-3 py-1 bg-blue-900/40 text-blue-300 text-xs font-semibold rounded-md border border-blue-800">Parallel Computing</span>
            </div>
          </div>
        </article>

        {/* Проєкт 3: Сканер YARA */}
        <article className="group p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
              Сканер директорії (YARA malware detector)
            </h3>
            <span className="text-slate-400 dark:text-slate-500 font-mono text-sm bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-100 dark:border-slate-700">Осінь 2025</span>
          </div>
          <p className="text-slate-600 dark:text-slate-400 mb-6 text-left">
            Розробка Python-програми для автоматизованої перевірки системних директорій на наявність шкідливого ПЗ за допомогою сигнатурного аналізу.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-400 text-xs font-semibold rounded-md border border-indigo-100 dark:border-indigo-800">Python</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700">YARA</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700">Cybersecurity</span>
          </div>
        </article>

        {/* Проєкт 4: ChessClub */}
        <article className="group p-8 bg-slate-950 text-white rounded-3xl shadow-xl border border-amber-500/20 hover:border-amber-500/50 transition-all duration-300 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-600/10 blur-3xl rounded-full"></div>
          <div className="relative z-10 text-left">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <h3 className="text-xl font-bold text-amber-400">
                Веб-сайт для ChessClub (Fullstack)
              </h3>
              <span className="text-slate-500 font-mono text-sm">
                05/2025 – 06/2025
              </span>
            </div>
            <p className="text-slate-400 mb-6">
              Динамічний веб-інтерфейс з управлінням базою даних MariaDB, реалізацією складних JOIN-запитів та модальних вікон для перегляду PDF/відео.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-amber-900/40 text-amber-300 text-xs font-semibold rounded-md border border-amber-800">PHP</span>
              <span className="px-3 py-1 bg-amber-900/40 text-amber-300 text-xs font-semibold rounded-md border border-amber-800">MySQL</span>
              <span className="px-3 py-1 bg-amber-900/40 text-amber-300 text-xs font-semibold rounded-md border border-amber-800">MariaDB</span>
            </div>
          </div>
        </article>

        {/* Проєкт 5: Angular-проєкт */}
        <article className="group p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-red-200 dark:hover:border-red-500/50 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">
              Angular-проєкт (SPA Application)
            </h3>
            <span className="text-slate-400 dark:text-slate-500 font-mono text-sm bg-slate-50 dark:bg-slate-800/50 px-3 py-1 rounded-lg border border-slate-100 dark:border-slate-700">10/2024 – 01/2025</span>
          </div>
          <ul className="space-y-2 text-slate-600 dark:text-slate-400 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">▹</span>
              Розробка SPA з чотирма сторінками: mainpage, board, map, forum.
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-1">▹</span>
              Реалізація постійної навігаційної панелі та компонентної архітектури Angular.
            </li>
          </ul>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-400 text-xs font-semibold rounded-md border border-red-100 dark:border-red-800">Angular</span>
            <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold rounded-md border border-slate-200 dark:border-slate-700">TypeScript</span>
            <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-md border border-blue-100 dark:border-blue-800">Bootstrap</span>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Experience;