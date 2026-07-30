//Project_6 is a React application that demonstrates the use of the useRef hook to reference a DOM element and toggle its visibility.


import { useState, useRef } from 'react'
import './App.css'

export default function App(){
  const [show, setShow] = useState(true);
  const inputRef = useRef(null);

  return(
    <div>
      <button onClick={() => setShow(!show)}>Toggle</button>
      {show && <p ref={inputRef}>Hello Mashi</p>}
      
    </div>
  )
}
