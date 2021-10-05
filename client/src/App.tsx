import './App.css';
import { useState } from "react"
import { Switch, Route } from "react-router-dom"

import { AllUnits } from "./pages/AllUnits"
import { UnitDetail } from "./pages/UnitDetail"
import { Summary } from "./pages/Summary"
import { Sidebar } from "./pages/components/Sidebar"
import { Home } from './pages/Home'
import { Header } from './pages/components/Header'

function App() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className="relative row bg-tavernBrown h-screen ml-0 mr-0 overflow-hidden font-mulish">
      <div 
        onClick={() => setIsExpanded(false)}
        className={`fixed inset-0 z-20 transition-opacity bg-black opacity-50
        ${isExpanded ? "md:hidden block" : "hidden" }`}
      />
      <Sidebar 
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <div className={`h-full flex flex-col flex-grow flex-nowrap p-8 overflow-auto`}>
        <Header 
          setIsExpanded={setIsExpanded}
        />
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
