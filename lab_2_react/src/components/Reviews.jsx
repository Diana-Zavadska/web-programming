import React, { useState, useEffect } from 'react';

const Reviews = () => {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Запит до сервера (Варіант 8)
    fetch('https://jsonplaceholder.typicode.com/posts/8/comments')
      .then((response) => response.json())
      .then((data) => {
        setComments(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Помилка завантаження:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="max-w-5xl mx-auto my-16 px-6">
      {/* Заголовок секції */}
      <div className="flex items-center gap-4 mb-10">
        <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight transition-colors">
          Відгуки <span className="text-blue-600">роботодавців</span>
        </h2>
        <div className="h-1 flex-grow bg-gradient-to-r from-blue-500 to-transparent rounded-full opacity-20"></div>
      </div>

      {loading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {comments.map((comment) => (
            <div 
              key={comment.id} 
              className="p-8 bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold text-xl uppercase group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500">
                  {comment.email[0]}
                </div>
                <div className="overflow-hidden">
                  <h4 className="font-bold text-slate-800 dark:text-slate-100 text-sm truncate uppercase tracking-tight transition-colors">
                    {comment.name}
                  </h4>
                  <p className="text-[10px] text-blue-500 dark:text-blue-400 font-mono italic truncate transition-colors">
                    {comment.email}
                  </p>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic font-medium transition-colors">
                "{comment.body}"
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Reviews;