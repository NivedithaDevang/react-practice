
import React, { useState } from 'react';
import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="app-heading">
      <p className="welcome-text">Welcome</p>
      <MyForm />
      <Car />
      <Counter />
      <Nav />
      <Card />
      <Fruits />
      <Button />
      <AlertButton />
      <App1 />
<ConditionalRendering />
      <Footer />
    </div>
  );
}

function MyForm() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(name);
  }

  return (
    <>
    <div className = "form">
    <form className = "form1" onSubmit={handleSubmit}>

      <div className="submit">
        <label>Enter your name:
          <input className = "text" type="text" value={name} onChange={handleChange} />
        </label>
        </div>
        <div className = "sub">
            <input className = "subButton" type="submit" />
        </div>
    
      
    </form>
    </div>
    </>
  )
}


function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className= "count">
      <h1>{count}</h1>
      <button className= "btnn" onClick={() => setCount(count + 1)}>
        Click to increment
      </button>
    </div>
  );
}



function Car() {
  const mystyles = {
    color: "brown",
    fontSize: "30px",
    backgroundColor: "lightyellow",
    padding: "20px 20px 20px 20px",
    borderRadius: "25px"
  };

  return (
    <div className="car">
      <h1>Styles inside function</h1>
      <h1 style={mystyles}>My car</h1>
    </div>
  );
}
function Nav() {
  return (
    <nav className="nav">
      <p>Today is Wednesday</p>
    </nav>
  );
}



function Card() {
  return (
    <div className="card">
      <div className="card-image">
        <img src={reactLogo} alt="Card Image" />
      </div>
      <p>This is a card</p>
    </div>
  );
}

function Button(){
  return (
    <button className = "btn">This is a button</button>
  )
}

function Fruits() {
  const items = ['Apple', 'Banana', 'Cherry'];

  return (
    <div className="fruits">
      <h1>This is a list</h1>
      <h3>My Fruit List</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function AlertButton() {
  const buttons = ["Button 1", "Button 2", "Button 3"];

  return (
    <div className="alert-group">
      <h2>Click a button</h2>

      {buttons.map((item) => (
        <button className="alert-btn" onClick={() => alert(`You clicked on ${item}`)}>
          {item}
        </button>
      ))}
    </div>
  );
}



function App1() {
  const [message, setMessage] = useState("Click Me!");

  return (
    <div className="app1">
      <h1>{message}</h1>
      <button className="btn" onClick={() => setMessage("You clicked the button!")}>
        Click Me!
      </button>
    </div>
  );
}


function ConditionalRendering() {
  
  let age = 20;

  return (
    <div className = "rendering">
      <h1>This is conditional rendering</h1>
      {age >= 18 ? <h2>Adult</h2> : <h2>Not Adult</h2>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <p>This footer is created by Niveditha</p>
    </footer>
  );
}

export default App;