import React, { useState, useEffect } from 'react';

const App = () => {
  const [isCompleted, setIsCompleted] = useState(false);
  const dueDate = new Date("2026-04-16T23:59:59").getTime();

  const getTimeRemaining = () => {
    const diff = dueDate - Date.now();
    if (diff <= 0) return "Overdue";
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days >= 1) return `Due in ${days} day${days > 1 ? "s" : ""}`;
    return "Due now!";
  };

  const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => setTimeRemaining(getTimeRemaining()), 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#008080] flex items-center justify-center p-4 font-mono">
      <div className="w-full max-w-4xl bg-[#c0c0c0] border-4 border-[#dfdfdf] border-r-[#808080] border-b-[#808080] shadow-2xl overflow-hidden">

        {/* Title Bar + Menu Bar (no testids needed here) */}
        <div className="bg-[#000080] text-white px-3 py-1 flex justify-between">
          <div>🎨 untitled - Paint</div>
          <div className="flex gap-1">_ □ ×</div>
        </div>

        <div className="bg-[#c0c0c0] border-b-2 border-white px-3 py-1 text-sm flex gap-4">
          {["File","Edit","View","Image","Options","Help"].map(t => <span key={t}>{t}</span>)}
        </div>

        <div className="flex">
          {/* Toolbar */}
          <div className="w-14 bg-[#c0c0c0] border-r-2 border-white p-1 grid grid-cols-2 gap-1">
            {["✏️","⬛","🖌️","🪣","🔍","📝","🔤","⬡","🟥","🟦","◯","⬤"].map((icon, i) => (
              <div key={i} className="w-9 h-9 bg-white border border-gray-700 flex items-center justify-center text-xl">
                {icon}
              </div>
            ))}
          </div>

          <div className="flex-1 bg-white flex items-center justify-center p-8">
            <article
              data-testid="test-todo-card"
              className="w-full max-w-[380px] bg-[#ffebcd] p-6 shadow-[10px_12px_4px_#00000050] rotate-[-2deg] border-2 border-[#d4a373]"
            >
              <h2
                data-testid="test-todo-title"
                className={`text-2xl font-bold mb-3 ${isCompleted ? "line-through text-gray-600" : ""}`}
              >
                pick outfit for outing
              </h2>

              <p data-testid="test-todo-description" className="mb-5 text-black/90">
                the outfit theme is coperate casual, so a cute button down and jeans with flats would work
              </p>

              <div className="flex flex-wrap gap-3 mb-4">
                <span data-testid="test-todo-priority">High 🔴</span>
                <span data-testid="test-todo-status">
                  {isCompleted ? "Completed" : "Pending"}
                </span>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    data-testid="test-todo-complete-toggle"
                    checked={isCompleted}
                    onChange={() => setIsCompleted(!isCompleted)}
                  />
                  mark as completed
                </label>
              </div>

              <div data-testid="test-todo-tags" className="flex gap-2 mb-6">
                <span data-testid="test-todo-tag-social" className="bg-[#c0c0c0] px-3 py-1 text-xs border border-gray-600">social</span>
                <span data-testid="test-todo-tag-fashion" className="bg-[#c0c0c0] px-3 py-1 text-xs border border-gray-600">fashion</span>
              </div>

              <div className="mb-6">
                <time data-testid="test-todo-due-date">Thu Apr 16 2026</time>
                <div data-testid="test-todo-time-remaining" className="font-medium">
                  {timeRemaining}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  data-testid="test-todo-edit-button"
                  onClick={() => console.log("edit clicked")}
                  className="px-6 py-2 bg-black text-white border border-b-2 border-r-2 border-white"
                >
                  Edit
                </button>
                <button
                  data-testid="test-todo-delete-button"
                  onClick={() => alert("Delete clicked")}
                  className="px-6 py-2 bg-white border border-b-2 border-r-2 border-gray-700"
                >
                  Delete
                </button>
              </div>
            </article>
          </div>
        </div>

        <div className="bg-[#c0c0c0] p-3 border-t-2 border-white flex gap-1 flex-wrap">
          {["#000","#fff","#f00","#0f0","#00f","#ff0","#f0f","#0ff"].map(c => (
            <div key={c} className="w-8 h-8 border border-gray-700" style={{backgroundColor: c}} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;