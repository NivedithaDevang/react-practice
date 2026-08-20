import {List, Veg, LoginCard} from "./List";
import Time from "./Time";
import './App.css';
function App(){
  return (
    <>
    
    <div className="fruitNames">

      <h1>Fruit Names</h1>

      <List />

      <h1>Vegetable Names</h1>
      <Veg />

    </div>
    
    <div className = "login">
      <h1>LOGIN or LOGOUT</h1><LoginCard /></div>
<Time />
      </>

  );



}

    

export default App