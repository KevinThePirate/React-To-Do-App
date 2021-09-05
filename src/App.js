import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEx from "./pages/CreateEx";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/create-ex" exact>
          <CreateEx />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
