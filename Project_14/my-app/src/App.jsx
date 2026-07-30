//Project_14 code work for printing the page


import './App.css'

export default function PrintApp(){

 return(
    <>
    <h1>Print Me</h1>
    <button onClick={() => window.print()}>Print</button>  

    </>
    );
  }
