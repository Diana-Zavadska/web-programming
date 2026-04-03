import React, { useState, useEffect } from 'react';

function Footer() {
  const [systemInfo, setSystemInfo] = useState('');

  useEffect(() => {
    const browserData = navigator.userAgent;
    const osData = navigator.platform;
    const fullInfo = `${osData} | ${browserData}`;

    localStorage.setItem('os_browser_info', fullInfo);

    const savedData = localStorage.getItem('os_browser_info');
    setSystemInfo(savedData);
  }, []);

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 px-6 mt-20 border-t border-slate-800 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-8">
        
        <div className="w-full max-w-xl bg-slate-900/50 border border-slate-800 p-6 rounded-2xl backdrop-blur-sm shadow-inner">
          <p className="text-xs font-mono uppercase tracking-widest text-blue-500 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            System Status
          </p>
          <p id="os-details" className="text-sm font-mono text-slate-300 leading-relaxed">
            Системна інформація: <span className="text-slate-500 italic break-all">
              {systemInfo || "Завантаження..."}
            </span>
          </p>
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a href="#" className="hover:text-blue-400 transition-colors">Documentation</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition-colors">Contact Support</a>
        </div>

        <div className="text-center space-y-2">
          <p className="text-sm">
            &copy; 2026 | <span className="text-white font-semibold">Завадська Діана</span>
          </p>
          <p className="text-xs text-slate-600 uppercase tracking-tighter italic">
            Cybersecurity Student @ Lviv Polytechnic National University
          </p>
        </div>

        <div className="flex items-center gap-3 opacity-30 grayscale hover:grayscale-0 transition-all">
          <span className="text-[10px] font-bold border border-slate-700 px-2 py-0.5 rounded">REACT</span>
          <span className="text-[10px] font-bold border border-slate-700 px-2 py-0.5 rounded">TAILWIND</span>
          <span className="text-[10px] font-bold border border-slate-700 px-2 py-0.5 rounded">VITE</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;