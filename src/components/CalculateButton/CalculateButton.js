import React from 'react';

function CalculateButton({ onCalculate }) {
  return (
    <div>
        {/*The code from the parent component is executed here. We delegated the definition of onCalculate to the parent component */}
      <button onClick={() => 
        {
            /* Extra code can be added by this component. Considering it is the Button component from the React framework as an example,
             code that is completly irrelevant to the developer can be added here and we don't know when the callback will be invoked.
             For example the following log (could be any code) could be added, but the dev using the component would not know about
             and does not need to know about it*/
            console.log("onCalculate")
             onCalculate()
             /* the console.log (or some other code) could be here, it is irrelevant from our usage of this component */
        }}>Calculate</button>
    </div>
  );
}

export default CalculateButton;
