import React, {useCallback} from 'react';
import './index.css';
import Timer from './Timer';
import { useState } from 'react';
import "@material-ui/core";
import {Link, useHistory} from 'react-router-dom';

function HomePage() {
  const [sessionNumber, setSessionNumber] = useState(4);
  const [workTime, setWorkTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);

  const history = useHistory();
  const handleOnClick = useCallback(() => history.push({pathname: '/timer', state: [{timeForWork: {workTime}, timeForBreak: {breakTime}}]}), [history, workTime, breakTime]);

  const changeSession = (amount) => {
    setSessionNumber(sessionNumber => sessionNumber + amount);
  }

  const changeWorkTime = (amount) => {
    setWorkTime(workTime => workTime + amount);
  }

  const changeBreakTime = (amount) => {
    setBreakTime(breakTime => breakTime + amount);
  }

  return (
    <div className="App">
      <div className="App-header">
        <p>Pomodoro Timer</p>
        <div className="even-columns">
            <div className="col">Sessions</div>
            <div className="col">Work Time</div>
            <div className="col">Break Time</div>
        </div>
        <div className="even-columns">
            <div className="col-2">
              <button className="btn-small blue-grey darken-3" onClick={() => changeSession(-1)}>
                <i className="material-icons">arrow_downward</i>
              </button>
              {sessionNumber}
              <button className="btn-small blue-grey darken-3" onClick={() => changeSession(1)}>
                <i className="material-icons">arrow_upward</i>
              </button>
              </div>
            <div className="col-2">
              <button className="btn-small blue-grey darken-3" onClick={() => changeWorkTime(-1)}>
                <i className="material-icons">arrow_downward</i>
              </button>
              {workTime}
              <button className="btn-small blue-grey darken-3" onClick={() => changeWorkTime(1)}>
                <i className="material-icons">arrow_upward</i>
              </button>
              </div>
            <div className="col-2">
              <button className="btn-small blue-grey darken-3" onClick={() => changeBreakTime(-1)}>
                <i className="material-icons">arrow_downward</i>
              </button>
              {breakTime}
              <button className="btn-small blue-grey darken-3" onClick={() => changeBreakTime(1)}>
                <i className="material-icons">arrow_upward</i>
              </button>
              </div>
        </div>
        <div className="startButton">
          <button className="btn-small blue-grey darken-3" onClick={handleOnClick}>Start</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
