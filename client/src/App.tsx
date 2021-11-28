import { useState } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { Toaster, toast, ToastBar } from "react-hot-toast"

import { TitledRoute } from "./components/TitledRoute"
import { AllUnits } from "./pages/Units/AllUnits"
import { UnitDetail } from "./pages/UnitDetail/UnitDetail"
import { Summary } from "./pages/Summary/Summary"
import { Settings } from './components/Settings';
import { Sidebar } from "./components/Sidebar"
import { Home } from './pages/Home'
import { Header } from './components/Header'

function App() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className="relative row bg-aliceBlue h-screen ml-0 mr-0 overflow-hidden font-mulish text-midnightBlue">
      <Toaster
        toastOptions={{
          success: {
            style: {
              color: "white",
              background: "#10b981"
            }
          },
          error: {
            style: {
              color: "white",
              background: "#ef4444"
            }
          }
        }}
      >
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <div className="flex flex-nowrap cursor-pointer" onClick={() => toast.dismiss(t.id)}>
              {icon}
              {message}
            </div>
          )}
        </ToastBar>
      )}
      </Toaster>
      <div 
        onClick={() => setIsExpanded(false)}
        className={`fixed inset-0 z-40 transition-opacity bg-black opacity-50
        ${isExpanded ? "md:hidden block" : "hidden" }`}
      />
      <Sidebar 
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
      />
      <div className={`h-full flex flex-col flex-grow flex-nowrap pr-8 pl-8 pb-8 overflow-auto`}>
        <Header 
          setIsExpanded={setIsExpanded}
        />
        <Switch>
          <TitledRoute title={"All Units"} component={AllUnits} exact path="/units" />
          <TitledRoute title={"Summary"} component={Summary} exact path="/summary"/>
          <Route component={UnitDetail} exact path="/unit/:unitId"/>
          <TitledRoute title={"Settings"} component={Settings} exact path="/settings"/>
          {/* Default Route */}
          <TitledRoute title={"Home"} component={Home}>
            <Redirect to="/summary"/>
          </TitledRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;
