import { React, useEffect, useState } from 'react';
import './App.css';
function App() {
  const [time, setTime] = useState(new Date());
  useEffect(() =>{
    const getCurrentTime = (req,res) =>{
      setTime(new Date());
      setTimeout(() => {
        getCurrentTime()
    },1000);
    }
    getCurrentTime();
  },[]);

  return (
    <div className='content'>
      <h1 className='time'>{time.toLocaleTimeString()} </h1>
    </div>
  );
}

export default App;
