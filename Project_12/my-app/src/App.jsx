//Project_12 is for form elements(input, checkbox, radio button)

import './App.css'

export default function App(){
  return (
    <>
     <label>
      Name: <input type="text" name="name" />
     </label>
     <hr />
     <label>
      checkbox: <input type="checkbox" name="checkbox" />
     </label>
      <hr />
      <p>
        Radio buttons:
        <hr/>
        <label>
          <input type="radio" name="radio" value="option1" /> Option 1
        </label>
        <br/>
        <label>
          <input type="radio" name="radio" value="option2" /> Option 2
        </label>
        <br/>
        <label>
          <input type="radio" name="radio" value="option3" /> Option 3
        </label>
      </p>
    </>
  );
}


