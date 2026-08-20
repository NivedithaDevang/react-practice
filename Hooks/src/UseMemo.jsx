import { useMemo, useState } from "react";

function Memo() {
  const [count, setCount] = useState(0);

  const double = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div>
        <h1>USEMEMO</h1>
      <h1>Count: {count}</h1>
      <h2>Double: {double}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

//one more example

function Price(){
    const [price, setPrice] = useState(100);
    const[quantity, setQuantity] = useState(1);

    const total = useMemo(() => {
            return (price * quantity);
    }, [price, quantity]
)

return(
    <div>
        <h3>Price: {price}</h3>
        <h3>Quantity: {quantity}</h3>
        <h3>Total: {total}</h3>

        <button onClick = {( ) => setQuantity(quantity + 1) }>Add one quantity</button>
        <button onClick={() => setPrice(price + 100)}>Increased price</button>
    </div>
)
}



export { Memo, Price };