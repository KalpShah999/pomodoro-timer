import './index.css';
import HomePage from './HomePage';
import React from 'react';
import { useState, useEffect } from 'react'

export default function Timer() {

  const [initialWorkMinutes, setInitialWorkMinutes] = useState(25);
  const [initialBreakMinutes, setInitialBreakMinutes] = useState(5);
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(initialWorkMinutes);
  const [displayMessage, setDisplayMessage] = useState(true);

  useEffect (() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      if (seconds === 0) {
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          let newMinutes = displayMessage ? initialBreakMinutes - 1 : initialWorkMinutes - 1;
          let newSeconds = 59;
          setMinutes(newMinutes)
          setSeconds(newSeconds);
          setDisplayMessage(!displayMessage);
        }
      } else {
        setSeconds(seconds - 1);
      }
    }, 1000)
  }, [seconds])

  const timerMinutes = minutes < 10 ? `0${minutes}` :  minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` :  seconds;

  return <div className="pomodoro">
    <div className="message">
      {displayMessage && <div>Work Time</div>}
      {!displayMessage && <div>Break Time</div>}
    </div>
    <div className="timer">
      {timerMinutes}:{timerSeconds}
    </div>
  </div>
}
