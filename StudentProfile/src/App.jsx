import { useState } from "react";
import "./App.css";
function App(){

  const Students = [
    {
      name : "Niveditha",
      age : 21,
      course : "BCA"
    },
     {
      name : "Dhanush",
      age : 23,
      course : "BCA"
    }, {
      name : "Shashank",
      age : 22,
      course : "BCA"
    }, {
      name : "Divyasri",
      age : 20,
      course : "BCA"
    }, {
      name : "Hemanth",
      age : 21,
      course : "BCA"
    }, {
      name : "Navya",
      age : 20,
      course : "BCA"
    },
  ]

  const [currentStudent, setCurrentStudent] = useState(0);

return(
  <>
  <div className="para">
    <p>This is a program to practice Next and Previous Button</p>
  </div>
  
  <div className="profile">

      <h1> {Students[currentStudent].name}</h1>

      <h3>{Students[currentStudent].age}</h3>

      <h3>{Students[currentStudent].course}</h3>

      <button onClick={() => setCurrentStudent(currentStudent - 1)} disabled={currentStudent === 0}>Previous</button>

      <button onClick={() => setCurrentStudent(currentStudent + 1)} disabled={currentStudent === Students.length - 1}>Next</button>

    </div></>
);

}




export default App;