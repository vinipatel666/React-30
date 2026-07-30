// Project 17 - Controlled Input Component with Reset Button


import './App.css'
import { useState } from 'react';

export default function MyInput() {
  const [text, setText] = useState('Hello Aarchi');

  function handleChange(e) {
    setText(e.target.value);//e.target.value is the current value of the input field.
  }

  return (
    <>
      <input value={text} onChange={handleChange} />
      <p>You typed: {text}</p>
      <button onClick={() => setText('Hello, ')}>
        Reset
      </button>
    </>
  );
}
