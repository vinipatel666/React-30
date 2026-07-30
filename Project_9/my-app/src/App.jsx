//Project_9 is a stopwatch app using useRef hook with useState hook


import { useState, useRef } from 'react'
import './App.css'

export default function Stopwatch(){ 
  const[startTime,setStartTime]=useState(0);//it is null
  const[now, setnow]=useState(0);
  const intervalRef = useRef(null);//to store interval id

  function handleStart(){
    setStartTime(Date.now());//date.now() gives time in milliseconds
    setnow(Date.now());//to re-render the component every 10 milliseconds

    //You can access the current value of that ref through the ref.current property
    clearInterval(intervalRef.current); //clearInteraval is used to clear any existing interval before starting a new one
    intervalRef.current = setInterval(()=>{ 
      setnow(Date.now());
    },10);
  }

  function handleStop(){
    clearInterval(intervalRef.current);
  }

  let secondsPassed = 0;
  if(startTime && now){//and operator
    secondsPassed = (now - startTime)/1000;//to convert milliseconds to seconds
  }

  return(
    <>
    <h1>StopWatch: {secondsPassed.toFixed(4)}</h1> 
    <button onClick={handleStart}>Start</button>
    <button onClick={handleStop}>Stop</button>
    </>
  );
}
