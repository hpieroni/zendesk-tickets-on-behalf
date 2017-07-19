import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../assets/logo.svg';

const Layout = ({ children }) =>
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </Navbar.Brand>
      </Navbar.Header>
    </Navbar>
    <div className="container">
      {children}
    </div>
  </div>;

export default Layout;
