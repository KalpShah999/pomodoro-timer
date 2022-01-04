import './index.css';
import HomePage from "./HomePage.js"
import Timer from "./Timer.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route exact path="/">
              <Timer />
            </Route>
            <Route path="/timer">
              <Timer />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
