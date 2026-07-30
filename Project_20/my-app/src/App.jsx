//Project_20: Create a Todo List Application using React useState Hook

import { useState } from 'react';
import './App.css'

function getInitialTodos() {//getInitialTodas function to generate initial todo items
  const Todos = [];
  for (let i = 1; i <= 5; i++) {
    Todos.push({
      id: i,
      text: "item" + i,
    });
  }
  return Todos;
    }
  
export default function Todallist(){
  const [todos, setTodos] = useState(getInitialTodos());
  const [text, setText] = useState('');

  return(
    <>
      <input
       value={text} 
       onChange={(e) => setText(e.target.value)} />
      <button onClick={() => {
        setText('')
        setTodos([{
          id: todos.length + 1,
          text: text
        }])
    }}>Add</button>
    <ul>
      {todos.map(todo => (
         //map method creates a new array populated with the results of calling a provided function on every element in the calling array.
        <li key={todo.id}>{todo.text}</li>
         //key is a special string attribute you need to include when creating lists of elements. Keys help React identify which items have changed, are added, or are removed.
      ))}
    </ul>

    </>
  );
}
