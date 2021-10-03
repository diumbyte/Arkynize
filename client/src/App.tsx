import './App.css';
import { useState } from "react"
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"

import { AllUnits } from "./pages/AllUnits"
import { UnitDetail } from "./pages/UnitDetail"
import { Summary } from "./pages/Summary"
import { Sidebar } from "./pages/components/Sidebar"
import { Home } from './pages/Home'

function App() {
  return (
    <div className="row bg-offWhite h-screen ml-0 mr-0 overflow-hidden">
      <Sidebar 
      />
      <div className={`h-full flex flex-col flex-grow flex-nowrap p-8 overflow-auto`}>
        <Switch>
          <Route component={AllUnits} exact path="/units"/>
          <Route component={Summary} exact path="/summary"/>
          <Route component={UnitDetail} exact path="/unit/:unitId"/>
          {/* Default Route */}
          <Route component={Home} exact path="/" />
        </Switch>
      </div>
    </div>
  );
}

export default App;
