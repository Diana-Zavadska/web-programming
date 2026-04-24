import React from 'react';

const ContactForm = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Збираємо дані з полів форми
    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value, // Додано поле згідно з методичкою
      message: e.target.message.value,
    };

    try {
      // Виконуємо POST запит на твій локальний сервер
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Дякуємо! Повідомлення надіслано успішно.');
        onClose(); // Закриваємо модальне вікно
      } else {
        const data = await response.json();
        alert(`Помилка: ${data.error || 'Щось пішло не так'}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert('Не вдалося з’єднатися з сервером. Перевірте, чи запущений Node.js.');
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="bg-white dark:bg-slate-900 rounded-[2.5rem] w-full max-w-lg p-10 shadow-2xl relative border border-slate-200 dark:border-slate-800">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-red-500 transition-colors p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h3 className="text-3xl font-black mb-2 text-slate-900 dark:text-white uppercase tracking-tighter italic text-center">Зворотний зв'язок</h3>
        <p className="text-slate-500 text-sm mb-8 text-center">Дані будуть надіслані через твій новий Node.js сервер</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-2">Ім'я</label>
            <input 
              type="text" 
              name="name" 
              required 
              placeholder="Ваше ім'я" 
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-2">Email</label>
            <input 
              type="email" 
              name="email" 
              required 
              placeholder="example@mail.com" 
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" 
            />
          </div>
          {/* Нове поле: Тема повідомлення */}
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-2">Тема</label>
            <input 
              type="text" 
              name="subject" 
              required 
              placeholder="Тема звернення" 
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none dark:text-white" 
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase text-slate-400 mb-1 ml-2">Повідомлення</label>
            <textarea 
              name="message" 
              rows="3" 
              required
              placeholder="Ваш текст..." 
              className="w-full p-4 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-2 focus:ring-blue-500 outline-none resize-none dark:text-white"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-xl shadow-blue-500/20 active:scale-95 uppercase tracking-widest mt-4"
          >
            Відправити
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
