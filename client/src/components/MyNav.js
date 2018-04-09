import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap/lib';
import { LinkContainer } from 'react-router-bootstrap';

const MyNav = () => {
  return (
    <Navbar>
      <Navbar.Header>
          <Navbar.Brand>
            Scott Williams
          </Navbar.Brand>
      </Navbar.Header>
      <Nav pullRight>
        <NavItem eventKey={1} href="/">
          Home
        </NavItem>
        <NavItem eventKey={2} href="/contact">
          Contact
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default MyNav;