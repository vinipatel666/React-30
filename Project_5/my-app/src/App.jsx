// Project_5 is a simple React application that implements a counter using the useState hook.


import { useState } from 'react' //useState is a Hook that lets you add React state to function components.
import './App.css'

function App() {
  const [count, setCount] = useState(0) // Declare a new state variable, which we'll call "count"

  return (
    <>

      <div className="counter">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <h2>Counter number:{count}</h2>
    </>
  )
}

export default App
