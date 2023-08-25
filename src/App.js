import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('add');

  const calculate = () => {
    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      return 'Invalid input';
    }

    switch (operation) {
      case 'add':
        return parsedNum1 + parsedNum2;
      case 'subtract':
        return parsedNum1 - parsedNum2;
      case 'multiply':
        return parsedNum1 * parsedNum2;
      case 'divide':
        return parsedNum2 !== 0 ? parsedNum1 / parsedNum2 : 'Cannot divide by zero';
      default:
        return '';
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <input type="text" placeholder="Enter number 1" value={num1} onChange={e => setNum1(e.target.value)} />
      <input type="text" placeholder="Enter number 2" value={num2} onChange={e => setNum2(e.target.value)} />
      <div className="buttons">
        {['add', 'subtract', 'multiply', 'divide'].map(op => (
          <button key={op} onClick={() => setOperation(op)}>{op.charAt(0).toUpperCase() + op.slice(1)}</button>
        ))}
      </div>
      <h2>Result: {calculate()}</h2>
    </div>
  );
}

export default App;
