import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { AllUnits } from "./pages/AllUnits"
import { UnitDetail } from "./pages/UnitDetail"
import { Summary } from "./pages/Summary"

function App() {

  console.log("Testing client");
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route component={AllUnits} exact path="/"/>
          <Route component={Summary} exact path="/summary"/>
          <Route component={UnitDetail} exact path="/unit/:unitId"/>
          {/* Default Route */}
          <Route component={AllUnits} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
