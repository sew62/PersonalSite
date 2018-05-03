import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const App = () => {
    return (
      <div>
        <Router>
          <div>
            <NavBar/>
            <div id="nav-back" />
            <div id="main-content">
              <Switch>
                <Route exact path="/" component={Home}/>
                {/* <Route exact path="/ideas" component={Ideas} /> */}
                {/* <ProtectedRoute exact path="/client" redirectTo="/login" component={Client} /> */}
                {/* <Route exact path="/login" component={LogIn} /> */}
                {/* <Route exact path="/create" component={CreateAccount} /> */}
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
}

export default App;
