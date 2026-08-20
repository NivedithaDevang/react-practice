import { useState } from 'react';
import Student from './Students';
import './App.css';

function Form() {
  const [person, setPerson] = useState({
    firstName: 'Niveditha',
    lastName: 'D',
    email: 'nivi@gmail.com',
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value,
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      lastName: e.target.value,
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      email: e.target.value,
    });
  }

  return (
    <>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange} />
      </label>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange} />
      </label>
      <label>
        Email:
        <input value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} ({person.email})
      </p>
    </>
  );
}

function App() {
  return (
    <>
      <div className="heading">
        <h1>Student Information</h1>
        <Student name="John Doe" age={20} isStudent={true} />
        <Student name="Jane Smith" age={22} isStudent={false} />
        <Student />
      </div>
      <Form />
    </>
  );
}

export default App;