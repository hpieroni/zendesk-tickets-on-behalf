import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.svg';

const Layout = ({ children }) =>
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <LinkContainer exact to="/">
            <img src={logo} alt="logo" />
          </LinkContainer>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
    </Navbar>
    <div className="container">
      {children}
    </div>
  </div>;

export default Layout;
