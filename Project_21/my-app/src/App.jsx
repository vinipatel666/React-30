//Project 21 - Progress Bar Component


import './App.css';

export default function App() {
  return (
    <>
      <progress value={0} />
      <br/>
      <progress value={0.5} />
      <br/>
      <progress value={0.7} />
      <br/>
      <progress value={75} max={100} />
      <br/>
      <progress value={1} />
      <br/>
      <progress value={null} />
    </>
  );
}


