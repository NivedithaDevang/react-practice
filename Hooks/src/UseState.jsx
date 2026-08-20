import { useState } from 'react';

function FavoriteColor() {
    const [color, setColor] = useState("red");

    return(
//Here the color changes in the sentence as u click the respected button
//but by default it is red
        <div>
            <h1>USESTATE</h1>
            <h1>My favorite color is {color}</h1>

            <button type = "button" onClick={() => setColor("blue")}>Blue</button>

            <button type = "button" onClick={() => setColor("red")}>Red</button>

            <button type = "button" onClick={() => setColor("pink")}>Pink</button>

            <button type = "button" onClick={() => setColor("purple")}>Purple</button>

        </div>
    )
}


function Counter() {
  const [count, setCount] = useState(0);
//here the number gets incremented and decremented

  return (
    <div>
      <h2>Count: {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrease
      </button>
    </div>
  );
}


export { FavoriteColor, Counter };