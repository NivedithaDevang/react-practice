import { useEffect, useState } from 'react';
import './Time.css';

function Time() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className = "time">
      <h1>Welcome to GeeksforGeeks!</h1>
      <h2>{currentTime}</h2>
    </div>
  );
}

export default Time;