//Project_11 code work for conditional rendering

import { useState } from 'react';
import './App.css'

function welcome(){
  return(
  <h1 className="welcome-text">Welcome to React</h1>
  );
}

export default function App(){
  const[show, setShow] = useState(true);
  return(
    <>
    <button onClick={() => setShow(!show)}>
      {show ? "Remove" : "Show"} {/* Toggle button text based on state */}
    </button>
    <hr />
    {show && welcome()} {/*it is called conditional rendering*/}
    </>
  );
}
