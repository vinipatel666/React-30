//Project_13 code work for handling number input and state updates(adding and subtracting age by 10)


import { useState } from 'react';
import './App.css'

export default function Form(){
  const [age, setage] = useState(18);
  const ageAsNumber = Number(age); // Convert age to a number

  return(
    <>
      <label>
        Age:
        <input 
          type="number" 
          value={age} 
          onChange={(e) => setage(e.target.value)} 
        />
        <hr/>
        <button onClick={() => setage(ageAsNumber + 10)}>Add 10 years</button>
        <hr />
        <button onClick={() => setage(ageAsNumber - 10)}>Subtract 10 years</button>
      </label>
      <hr/>
      {ageAsNumber > 0 &&
        <p>You are {ageAsNumber} years old.</p>}
    </>
  );
}
