import React from 'react'
import { useState, useEffect } from 'react'
import bgImage from "./assets/background.jpg"


const App = () => {

  const [isCompleted, setIsCompleted] = useState(false);
  const dueDate = Date.now() + 3 * 24 * 60 * 60 * 1000;
  const getTimeRemaining = () => {
  const now = Date.now();
  const diff = dueDate - now;

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (diff <= 0) {
    return "Overdue";
  }

  if (days >= 1) {
    return `Due in ${days} day${days > 1 ? "s" : ""}`;
  }

  if (hours >= 1) {
    return `Due in ${hours} hour${hours > 1 ? "s" : ""}`;
  }

  if (minutes <= 1) {
    return "Due now!";
  }

  return `Due in ${minutes} minutes`;
  };

  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(prev => prev + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  console.log("tick updated:", tick);

  return (
    < >
    
    <div className="min-h-screen bg-[url('./assets/background.jpg')]  bg-center bg-no-repeat flex items-center justify-center bg-contain" >
    <article data-testid="test-todo-card" className='bg-pink-700  ml-40 mr-30 h-45 w-full max-w-md  '>
      <h2
        className='text-2xl font-semibold sm:text-lg'
        data-testid="test-todo-title"
        style={{
          textDecoration: isCompleted ? "line-through" : "none"
        }}
      >
        pick outfit for outing
      </h2>
      <hr />
      <p data-testid="test-todo-description">the outfit theme is coperate casual, so a cute button down and jeans with flats would work</p>
      <span data-testid="test-todo-priority">High🔴</span>
      <span data-testid="test-todo-status">
        {isCompleted ? "Completed" : "Pending"}
      </span>
      <label>
        <input
        type="checkbox"
        data-testid="test-todo-complete-toggle"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
        /> mark as completed
      </label>
      <div data-testid="test-todo-tags">
            <span data-testid="test-todo-tag-social">social</span>
            <span data-testid="test-todo-tag-fashion">Fashion</span>
      </div>
      <button data-testid="test-todo-edit-button" onClick={() => console.log("edit clicked")}>
        Edit
        
      </button>
      <button data-testid="test-todo-delete-button" onClick={() => alert("Delete clicked")}>
        Delete
      </button>
      <time data-testid="test-todo-due-date">
        {new Date(dueDate).toDateString()}
      </time>
      <span data-testid="test-todo-time-remaining">
        {getTimeRemaining()}
      </span>





    </article>
    </div>
    </>
  )
}

export default App