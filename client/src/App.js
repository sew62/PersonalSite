import React from "react";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import NoMatch from './pages/NoMatch';
import Footer from './components/Footer';

const App = () => {
    return (
      <div>
        <Router>
          <div>
            <header>
              <NavBar/>
            </header>
            <div id="nav-back" />
            <div id="main-content">
              <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/contact" component={Contact}/>
                {/* <ProtectedRoute exact path="/client" redirectTo="/login" component={Client} /> */}
                {/* <Route exact path="/login" component={LogIn} /> */}
                <Route component={NoMatch} />
              </Switch>
            </div>
            <hr/>
            <Footer/>
          </div>
        </Router>
      </div>
    );
}

export default App;
