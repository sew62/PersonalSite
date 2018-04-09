import React from "react";
import "./App.css";
import MyNav from "./components/MyNav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';

const App = () => {
    return (
      <div>
        <MyNav />
        <Router>
          <Switch>
            <Route exact path="/" component={Home} /> 
            {/* <Route exact path="/ideas" component={Ideas} /> */}
            {/* <ProtectedRoute exact path="/client" redirectTo="/login" component={Client} /> */}
            {/* <Route exact path="/login" component={LogIn} /> */}
            {/* <Route exact path="/create" component={CreateAccount} /> */}
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </div>
    );
}

export default App;
