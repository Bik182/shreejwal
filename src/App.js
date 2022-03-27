import Home from "./components/Home";
import Work from "./components/Work";
import Info from "./components/Info";
import Entrance from "./components/Entrance";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Entrance />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/info">
            <Info />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
