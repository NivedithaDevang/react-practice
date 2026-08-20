import { useReducer } from "react";

function Reducer(count, action) {
  if (action === "increase") {
    return count + 1;
  }

  if (action === "decrease") {
    return count - 1;
  }

  return count;
}

function UseReducer() {
  const [count, dispatch] = useReducer(Reducer, 0);

  return (
    <div>
        <h1>USEREDUCER</h1>
      <h1>{count}</h1>

      <button onClick={() => dispatch("increase")}>
        +
      </button>

      <button onClick={() => dispatch("decrease")}>
        -
      </button>
    </div>
  );
}


//another example

function shoppingCart(cart, action) {
  if (action === "add") {
    return cart + 1;
  }

  if (action === "remove") {
    return cart - 1;
  }

  return cart;
}

function Cart() {
  const [cart, dispatch] = useReducer(shoppingCart, 0);

  return (
    <div>
        <h1>Shopping Cart</h1>
      <h1>Items in cart: {cart}</h1>

      <button onClick={() => dispatch("add")}>
        Add Item
      </button>

      <button onClick={() => dispatch("remove")}>
        Remove Item
      </button>
    </div>
  );
}


export { UseReducer, Reducer, Cart, shoppingCart };