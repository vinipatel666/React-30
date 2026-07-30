// Project_2 is a simple React application that displays a welcome message and a button component.


import './App.css'

function MyButton() {
  return (
    <>
    <button>
      I'm ready
    </button>
    </>
  );
}

export default function App() {
  return(
    <div>
    <h1>Welcome To my 30 project</h1>
    <h2>Are you ready???</h2>
    <h3>if you are ready then click on...</h3>
    <h4>click on I'm ready</h4>
    <h5>ready???</h5>
    <MyButton />
    </div>
    );
}
