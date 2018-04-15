import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id="my-nav">
      <Link to="/">Scott Williams</Link>
      <span className="right-align">
        <Link to="/">Home</Link>&nbsp;|&nbsp;
        <Link to="/contact">Contact</Link>&nbsp;|&nbsp; 
        <Link to="/portfolio">Portfolio</Link>
      </span>
    </nav>
  );
};

export default NavBar;