// Child Component
import React, { useState } from 'react';

function Calculator({ onCalculate }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  return (
    <div>
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
      <button onClick={() =>
        { 
            /* Extra code can be added by this component. Considering it is the Button component from the React framework as an example,
             code that is completly irrelevant to the developer can be added here and we don't know when the callback will be invoked.
             For example the following log (could be any code) could be added, but the dev using the component would not know about
             and does not need to know about it.
             In addition to the CalculateButton component, here we have 2 parameters that we need to pass. Those parameters are used in the parent
             component, App.js. This where the onCalculate is defined*/
          onCalculate(num1, num2)}
        }>Calculate</button>
    </div>
  );
}

export default Calculator;
