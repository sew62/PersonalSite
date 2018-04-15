import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav id="my-nav">
      <Link to="/">Scott Williams</Link>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/portfolio">Portfolio</Link>
    </nav>
  );
};

export default NavBar;