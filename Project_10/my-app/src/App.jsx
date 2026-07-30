//Project_10 is a counter app using useEffect hook with useState hook


import { useState, useEffect } from 'react';
//useState → for adding state to functional components.
//useEffect → for running side effects in components 
// (like fetching data, timers, subscriptions, or reacting to state/prop changes).




import './App.css'

export default function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {//it runs after every 1 second
      setCount(c => c + 1);//updating the state
    }, 1000);//1000 milliseconds = 1 second
    return () => clearInterval(id);//cleanup function to clear the interval when the component unmounts
  });
  return <h1>Seconds passed: {count}</h1>;
}

