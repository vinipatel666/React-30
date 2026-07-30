import { useState } from 'react';
import './App.css';

function App() {
  const [current, setCurrent] = useState('');
  const [previous, setPrevious] = useState('');
  const [operation, setOperation] = useState(null);

  function appendNumber(num) {//appendNumber function used to append a number or decimal point to the current input.
    if (num === '' && current.includes('')) return;
    setCurrent(current + num);
  }

  function chooseOperation(op) {//chooseOperation function to set the operation and handle computation if needed.
    if (current === '') return;
    if (previous !== '') {
      compute();
    } else {
      setPrevious(current);
    }
    setCurrent('');
    setOperation(op);
  }

  function compute() {

      const prev = parseFloat(previous);
      const curr = parseFloat(current);
    if (isNaN(prev) || isNaN(curr)) return;// opereter is 
    switch (operation) {
      case '+':
        result = prev + curr;
        break;
      case '-':
        result = prev - curr;
        break;
      case '*':
        result = prev * curr;
        break;
      case '÷':
        result = prev / curr;
        break;
      default:
        return;
      );
    }
    setCurrent(result.toString());
    setPrevious('');
    setOperation(null);
  }

  function clear() {
    setCurrent('');
    setPrevious('');
    setOperation(null);
  }

  function del() {
    setCurrent(current.slice(0, -1));
  }

  return (
    <div className="Calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {previous} {operation}
        </div>
        <div className="current-operand">{current}</div>
      </div>
      <button className="span-two" onClick={clear}>AC</button>
      <button onClick={del}>DEL</button>
      <button onClick={() => chooseOperation('÷')}>÷</button>
      <button onClick={() => appendNumber('1')}>1</button>
      <button onClick={() => appendNumber('2')}>2</button>
      <button onClick={() => appendNumber('3')}>3</button>
      <button onClick={() => chooseOperation('*')}>*</button>
      <button onClick={() => appendNumber('4')}>4</button>
      <button onClick={() => appendNumber('5')}>5</button>
      <button onClick={() => appendNumber('6')}>6</button>
      <button onClick={() => chooseOperation('+')}>+</button>
      <button onClick={() => appendNumber('7')}>7</button>
      <button onClick={() => appendNumber('8')}>8</button>
      <button onClick={() => appendNumber('9')}>9</button>
      <button onClick={() => chooseOperation('-')}>-</button>
      <button onClick={() => appendNumber('.')}>.</button>
      <button onClick={() => appendNumber('0')}>0</button>
      <button className="span-two" onClick={compute}>=</button>
    </div>
  );
}

export default App;