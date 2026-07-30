//Project_8 is a counter app using useRef hook with alert box


import { useRef } from 'react';
import './App.css'

export default function counter() {
  let ref = useRef(0);

function handleClick() {
  ref.current = ref.current + 1;
  alert("you clicked"+ ref.current + "times");
}

  return (
    <button onClick={handleClick}>Click me</button>
  );
}


