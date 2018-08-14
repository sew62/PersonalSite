import React from 'react';
import { Link, withRouter } from 'react-router-dom';

var selectedButtonStyle = {
  textDecoration: "underline"
};

class NavBar extends React.Component {
  state = {
    disp: "none"
  }

  toggleMenu() {
    this.setState({
      disp: this.state.disp === "none" ? "inherit" : "none"
    });
  }

  render() {
    return (
      <div id="my-nav">
        <nav> 
          <Link to="/" className="nav-button"><img id="avatar" alt="Scott's Avatar" src="images/myicon.png"/>&nbsp;Scott Williams</Link>
          <span className="right-align">
            <span id="nav-links">
              <Link className="nav-button" to="/">
                Home
              </Link>&nbsp;|&nbsp;
              <Link className="nav-button" to="/contact">
                Contact
              </Link>&nbsp;|&nbsp; 
              <Link className="nav-button" to="/portfolio">
                Portfolio
              </Link>
            </span>
            <button id="menu-icon" onClick={this.toggleMenu.bind(this)}><img src="images/menuicon.svg" alt="Menu Icon"/></button>
          </span>
        </nav>
        <div id="menu-links" style={{display: this.state.disp}}>
          <div className="menu-li" style={{marginTop: "15px"}}><Link to="/">Home</Link></div>
          <div className="menu-li"><Link to="/contact">Contact</Link></div>
          <div className="menu-li"><Link to="/portfolio">Portfolio</Link></div>
        </div>
      </div>
    );
  }
};

export default withRouter(NavBar);