//Project_3 is a React application that displays information about astronauts. It allows users to navigate through different astronauts using a "Next" button.


import { useState } from 'react';
import { Astronauts } from './Astronauts';
import './App.css';


export default function App(){
  const [index, setIndex] = useState(0);

  function handleNext(){
    setIndex(index + 1);
}
  const Astronaut = Astronauts[index];
return(
  <>
  <button onClick={handleNext}>Next</button>
  <h1>
   <i> {Astronaut.name}</i>
  </h1>

  <img src={Astronaut.src} width={200}/>
  <p>
    {Astronaut.description}
  </p>
  </>
)

}





    