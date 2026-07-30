// project 28 - Dice Roller


import React, { useState } from 'react';
import './App.css';

function DiceRoller() {
  const [diceValue, setDiceValue] = useState(0); // Initial dice value

  const rollDice = () => {
    // Generate a random integer between 1 and 6 (inclusive)
    const newDiceValue = Math.floor(Math.random() * 6) + 1; //math.floor rounds down to nearest integer
                                                            //math.random generates a random number between 0 and 1
    setDiceValue(newDiceValue);
  };

  return (
    <div>
      <h1>Dice Roller</h1>
      <p>Current Dice Value: {diceValue}</p>
      <button onClick={rollDice}>Roll Dice</button>
    </div>
  );
}

export default DiceRoller;
