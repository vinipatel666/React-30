// Project_1 is a simple React application that takes user input and displays a greeting message.


import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')

  return (
    <>
    <div>
      <input
      type="text"
      placeholder="Enter youer name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <h1>Hello , {name}</h1>
    </div>
    </>
  )
}

export default App
