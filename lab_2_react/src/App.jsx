import React, { useState, useEffect } from 'react';
import Header from './components/Header';
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
        <Header toggleTheme={toggleTheme} theme={theme} />
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