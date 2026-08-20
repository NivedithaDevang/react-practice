import { FavoriteColor, Counter } from "./UseState";
import { Timer, Operation } from "./UseEffect";
import { Component1, Component2, Component3, Profile, Context } from "./UseContext";
import { Ref, Click } from "./UseRef";
import { Reducer, UseReducer } from "./UseReducer"
import { shoppingCart, Cart } from "./UseReducer";
import { Memo, Price } from "./UseMemo";
import CallBack from "./UseCallback";

function App() {
  return (
    <>
    <FavoriteColor />
    <Counter />
    <Timer />
    <Operation />
    <Component1 />
    <Context />
  <Ref />
  <Click />
  
  <UseReducer />
  <Cart />
  <Memo />
  <Price />
  <CallBack />
    </>
  )
}



export default App;