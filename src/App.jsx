import "./App.css";
import reactLogo from "./assets/react.svg";

function App() {
  return (
    <div className="app-heading">
      <p className="welcome-text">Welcome</p>
      <Nav />
      <Card />
      <Fruits />
      <Button />
      <AlertButton />
      <Footer />
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

function Footer() {
  return (
    <footer className="footer">
      <p>This footer is created by Niveditha</p>
    </footer>
  );
}

export default App;