import './App.css';
import Calculator from './components/Calculator/Calculator';
import { useState } from 'react';
import CalculateButton from './components/CalculateButton/CalculateButton';

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const [addResult, setAddResult] = useState(0);
  const [substractionResult, setSubstractionResult] = useState(0);

  const handleCalculate = () => {
    const sum = num1 * num2;
    setResult(sum);
  };

  const handleAddCalculate = (num1, num2) => {
    const sum = num1 + num2;
    setAddResult(sum);
  };

  const handleSubstractionCalculate = (num1, num2) => {
    const sum = num1 - num2;
    setSubstractionResult(sum);
  };
  return (
    <div className="App">
      <header className="App-header">


      {/* Simple Calculator */}
      <h2>Simple Calculator</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(Number(e.target.value))}
        placeholder="Enter second number"
      />
      {/* Passing the callback function to the child component */}
      <CalculateButton onCalculate={handleCalculate} />
      <p>Result: {result}</p>


      {/* Addition Calculator */}
      <h2>Addition Calculator</h2>
      <Calculator onCalculate={handleAddCalculate} />
      <p>Result: {addResult}</p>

      
      {/* Addition Calculator */}
      <h2>Substraction Calculator</h2>
      <Calculator onCalculate={handleSubstractionCalculate} />
      <p>Result: {substractionResult}</p>
      </header>
    </div>
  );
}

export default App;
