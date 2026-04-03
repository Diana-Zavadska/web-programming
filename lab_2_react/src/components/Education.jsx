import React from 'react';

function Education() {
  return (
    <section className="max-w-5xl mx-auto my-16 px-6">
      {/* Заголовок секції з лінією-акцентом */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">
          Освіта <span className="text-blue-600">&</span> Сертифікація
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-20"></div>
      </div>

      <div className="grid gap-8">
        {/* Картка Університету */}
        <div className="group relative p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-xl hover:border-blue-200 dark:hover:border-blue-500/50 transition-all duration-300">
          <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-24 h-24 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3L1 9l11 6 9-4.91V17h2V9M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z" />
            </svg>
          </div>
          
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 transition-colors">
            Національний університет "Львівська Політехніка"
          </h3>
          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></span>
            Бакалавр з Кібербезпеки, 3-й курс
          </p>
          <p className="text-slate-500 dark:text-slate-400 font-mono text-sm transition-colors">
            [ 2023 — Теперішній час ]
          </p>
        </div>

        {/* Секція Курсів */}
        <div className="grid md:grid-cols-2 gap-6">
            {/* AWS Course Card */}
            <a 
            href="https://www.credly.com/badges/62115455-03ff-4041-a092-3ef55e098460/linked_in_profile" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-400 transition-all group block"
            >
            <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-blue-700 dark:text-blue-400 text-xs font-bold rounded-md border border-blue-100 dark:border-blue-900 uppercase transition-colors">
                Cloud
                </span>
                <span className="text-slate-400 font-mono text-xs">08/2025</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-700 dark:group-hover:text-blue-400 transition-colors">
                AWS Academy Cloud Foundation
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-colors">Amazon Web Services</p>
            <div className="mt-4 text-xs text-blue-500 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                Переглянути сертифікат <span>→</span>
            </div>
            </a>

            {/* Google Course Card */}
            <a 
            href="https://www.coursera.org/account/accomplishments/specialization/L9AYZHXDVYYK" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 hover:bg-indigo-50 dark:hover:bg-indigo-900/30 hover:border-indigo-400 transition-all group block"
            >
            <div className="flex justify-between items-start mb-4">
                <span className="px-3 py-1 bg-white dark:bg-slate-800 text-indigo-700 dark:text-indigo-400 text-xs font-bold rounded-md border border-indigo-100 dark:border-indigo-900 uppercase transition-colors">
                Security
                </span>
                <span className="text-slate-400 font-mono text-xs">12/2024</span>
            </div>
            <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-indigo-700 dark:group-hover:text-indigo-400 transition-colors">
                Google Cybersecurity Specialization
            </h4>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 transition-colors">Coursera</p>
            <div className="mt-4 text-xs text-indigo-500 font-bold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-wider">
                Переглянути сертифікат <span>→</span>
            </div>
            </a>
        </div>
      </div>
    </section>
  );
}

export default Education;