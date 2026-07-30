// Project 19 - Counter Component with Increment Buttons


import { useState } from 'react';
import './App.css'

export default function Counter() {
  const [age, setAge] = useState(18);

  function increment() {
    setAge(a => a + 1);
  }

  return (
    <>
      <h1>Your age: {age}</h1>
      <button onClick={() => {
        increment();
      }}>+1</button>
      <button onClick={() => {
        increment();
        increment();
      }}>+2</button>
      <button onClick={() => {
        increment();
        increment();
        increment();
      }}>+3</button>
    </>
  );
}
