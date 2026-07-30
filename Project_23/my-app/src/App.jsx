//Project 23 - firstName and lastName with useId Hook

import { useId } from 'react';
import './App.css';

export default function App(){
  const id = useId();// useId is a hook that generates a unique id for each component instance
  return (
    <form>
      <label htmlFor={id + 'firstName'}>First Name: </label>
      <input id={id + 'firstName'} type="text" />
      <hr />
      <label htmlFor={id + 'lastName'}>Last Name: </label>
      <input id={id + 'lastName'} type="text" />
    </form>

  );
}


