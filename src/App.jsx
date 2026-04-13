import React, { useState, useEffect } from 'react';

const App = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const dueDate = new Date("2026-04-16T23:59:59").getTime();

  const getTimeRemaining = () => {
    const diff = dueDate - Date.now();
    if (diff <= 0) return "Overdue";
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days >= 2) return `Due in ${days} days`;
    if (days === 1) return "Due tomorrow";
    return "Due now!";
  };

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen  flex items-center justify-center p-6 font-['Fredoka'] bg-red-950">
      <article
        data-testid="test-todo-card"
        className="w-full max-w-md bg-blue-50 border-red-300 border-4 rounded-lg  shadow-2xl overflow-hidden border "
      >
       

        <div className="p-8">

          <h2
            data-testid="test-todo-title"
            className={`text-3xl font-semibold tracking-tight mb-3 transition-all ${
              isCompleted ? "line-through text-gray-400" : "text-gray-900"
            }`}
          >
            pick outfit for outing
          </h2>
          <hr />
          <br />

          <p
            data-testid="test-todo-description"
            className="text-gray-600 leading-relaxed mb-8"
          >
            the outfit theme is corporate casual, so a cute button down and jeans with flats would work
          </p>

          
          <div className="flex items-center justify-between mb-6">
            <div className="text-lg font-medium text-gray-700">Mark as completed</div>
            
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                data-testid="test-todo-complete-toggle"
                checked={isCompleted}
                onChange={() => setIsCompleted(!isCompleted)}
                className="sr-only peer"
              />
              <div className="w-14 h-8 bg-gray-200 rounded-full peer peer-checked:bg-red-800 transition-all duration-300"></div>
              <div className="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition-all duration-300"></div>
            </label>
          </div>


          <div className="flex gap-3 mb-8">
            <span
              data-testid="test-todo-priority"
              className="inline-flex items-center gap-1.5 bg-red-100 text-red-700 px-5 py-2 rounded-2xl text-sm font-medium"
            >
              High 
            </span>

            <span
              data-testid="test-todo-status"
              className={`px-5 py-2 rounded-2xl text-sm font-medium ${
                isCompleted
                  ? "bg-emerald-100 text-emerald-700"
                  : "bg-amber-100 text-amber-700"
              }`}
            >
              {isCompleted ? "Done" : "Pending"}
            </span>
          </div>
          <p className="text-lg font-medium text-gray-700">category</p>
          <div data-testid="test-todo-tags" className="flex gap-3 mb-8">
            <span
              data-testid="test-todo-tag-social"
              className="bg-blue-100 text-gray-700 px-6 py-2 rounded-2xl text-sm font-medium"
            >
              social
            </span>
            <span
              data-testid="test-todo-tag-fashion"
              className="bg-blue-100 text-gray-700 px-6 py-2 rounded-2xl text-sm font-medium"
            >
              fashion
            </span>
          </div>
          <hr />
          <div className="flex justify-between items-end  border-gray-100 pt-6">
            <div>
              <time
                data-testid="test-todo-due-date"
                className="block text-sm text-gray-500"
              >
                Thu Apr 16 2026
              </time>
              <div
                data-testid="test-todo-time-remaining"
                className="text-lg font-semibold text-gray-800"
              >
                {timeRemaining}
              </div>
            </div>

            <div className="flex gap-3">
              <button
                data-testid="test-todo-edit-button"
                onClick={() => alert("edit clicked")}
                className="px-6 py-3 bg-gray-900 hover:bg-black text-white rounded-2xl font-medium transition-all active:scale-95"

              >
                Edit
              </button>

              <button
                data-testid="test-todo-delete-button"
                onClick={() => alert("Delete clicked")}
                className="px-6 py-3 bg-white border border-red-200 text-red-600 hover:bg-red-50 rounded-2xl font-medium transition-all active:scale-95"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default App;