import Home from "./components/Home";
import Work from "./components/Work";
import Info from "./components/Info";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
 
  return (
    <Router>
      <div>
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav> */}

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
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
