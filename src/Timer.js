import './index.css';
import HomePage from './HomePage';
import React from 'react';
import { useState, useEffect } from 'react'

export default function Timer() {

  const [initialWorkMinutes, setInitialWorkMinutes] = useState(25); // Default number of miniutes for the work session 
  const [initialBreakMinutes, setInitialBreakMinutes] = useState(5); // Default number of miniutes for the break  session 
  const [seconds, setSeconds] = useState(0); // Current elapsed seconds 
  const [minutes, setMinutes] = useState(initialWorkMinutes); // Current elapsed minutes 
  const [displayMessage, setDisplayMessage] = useState(true); // On-screen element representing the timer 

  // Timer to count down the seconds in real-time 
  useEffect (() => {
    let interval = setInterval(() => {
      clearInterval(interval);
      // Reset the seconds once they reach 0 
      if (seconds === 0) {
        // If the timer is not yet done, start the next minute 
        if (minutes !== 0) {
          setSeconds(59);
          setMinutes(minutes - 1);

        // Otherwise change to the next session (break -> work, and vice versa)
        } else {
          let newMinutes = displayMessage ? initialBreakMinutes - 1 : initialWorkMinutes - 1;
          let newSeconds = 59;
          setMinutes(newMinutes)
          setSeconds(newSeconds);
          setDisplayMessage(!displayMessage);
        }
      } else {
        // Decrease the seconds by 1 
        setSeconds(seconds - 1);
      }
    }, 1000) // Loop this function every second (1000 ms)
  }, [seconds])

  // Define the string output of the minutes and seconds on the screen 
  const timerMinutes = minutes < 10 ? `0${minutes}` :  minutes;
  const timerSeconds = seconds < 10 ? `0${seconds}` :  seconds;

  // Display the front end 
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
