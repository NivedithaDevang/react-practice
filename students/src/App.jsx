import Student from './Students';
import './App.css';
function App() {
  return (
    <div className= "heading">
      <h1>Student Information</h1>
      <Student name="John Doe" age={20} isStudent={true} />
      <Student name="Jane Smith" age={22} isStudent={false} />
       <Student />
              <Student />
       <Student />
       <Student />

    </div>
  );
}

export default App;