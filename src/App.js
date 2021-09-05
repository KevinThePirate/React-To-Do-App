import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateEx from "./pages/CreateEx";
import Navbar from "./components/Navbar";
import EditEx from "./pages/EditEx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/home" exact>
          <HomePage />
        </Route>
        <Route path="/create-ex" exact>
          <CreateEx />
        </Route>
        <Route path="/exercises/:id/edit" exact>
          <EditEx />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
