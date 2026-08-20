import { useState, useEffect } from 'react';

function Timer() {
  const [count, setCount] = useState(0);

//Here after ever 2 seconds , the number will add to 10
  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 10);
    }, 2000);
  });

  return (
  <div>
    <h1>USEEFFECT</h1>
    <h1>I've rendered {count} times!</h1>
    </div>
  );
}


function Operation() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);
//Here the number will get multiplied by 2 as it increments
  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  return (
    <>
    <h2>Multiply the number by 2</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Click to multiply</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
export { Timer, Operation };