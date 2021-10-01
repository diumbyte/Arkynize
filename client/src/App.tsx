import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AllUnits } from "./pages/AllUnits"

function App() {

  console.log("Testing client");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={AllUnits} path="/"/>
          {/* <Route /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
