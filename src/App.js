import React, {useState} from 'react';

import DisplayComponent from './components/DisplayComponent'
import BtnComponent from './components/BtnComponent'
import './App.css';


function App() {

  const [time, setTime] = useState({ seconds:0,  minutes:0,  hours:0 })
  const [ intervalId, intervalIdReturned] = useState(0);
  const [ status, setStatus] = useState(0);

  const start = () => {
    setStatus(1);
    intervalIdReturned(setInterval(updateTime, 1000));
  };
  const stop = () => {
  clearInterval(intervalId);
  setTime({ seconds:0,  minutes:0,  hours:0 });
  setStatus(2)
  };
  const reset = () => {
  stop()
  };

  let clickCounter = false;

  const waitHandler = () => {
    if(!clickCounter) {
      clickCounter = true;
      setTimeout(() => {
        clickCounter = false;
      }, 300);
      return
    }
    clearInterval(intervalId);
    setStatus(2)
  }

  let updateSeconds = time.seconds, updateMinutes = time.minutes, updateHours = time.hours;

  const updateTime = () => {
    if(updateSeconds === 60) {
      updateMinutes++;
      updateSeconds = 0;
    }
    if(updateMinutes === 60) {
      updateHours++;
      updateMinutes = 0;
    }
    updateSeconds++;
    return setTime({
      seconds:updateSeconds, 
      minutes:updateMinutes, 
      hours:updateHours
    })

  }
  return (
    <div className="mainSection">
        <div className="clock-holder">
            <div className="stopwatch">
              <DisplayComponent  time={time}/>
              <BtnComponent start={start} stop={stop} reset={reset} wait={waitHandler} status={status} />
            </div>
        </div>
    </div>
  );
}

export default App;
