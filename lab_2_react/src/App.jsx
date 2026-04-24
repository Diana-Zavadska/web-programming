import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroVisual from './components/HeroVisual'
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour >= 7 && hour < 21) {
      setTheme('light');
    } else {
      setTheme('dark');
    }

    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('modal_closed')) {
        setIsModalOpen(true);
      }
    }, 60000);

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={theme}>
      <main className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-500"> 
        <div className="relative overflow-hidden bg-gradient-to-b from-white to-blue-50 dark:from-slate-950 dark:to-slate-900 border-b border-slate-200 dark:border-blue-500/20">
          <HeroVisual />
          <Header toggleTheme={toggleTheme} theme={theme} />
        </div>
        <Skills />
        <Education />
        <Experience />
        <Reviews />
        <Footer />
        <ContactForm 
          isOpen={isModalOpen} 
          onClose={() => {
            setIsModalOpen(false);
            sessionStorage.setItem('modal_closed', 'true');
          }} 
        />
      </main>
    </div>
  );
}

export default App;
