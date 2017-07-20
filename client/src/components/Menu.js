import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.svg';
import Auth from '../containers/Auth';

const Menu = ({
  isAuthenticated,
  profile,
  handleLoginClick,
  handleLogoutClick
}) =>
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <LinkContainer exact to="/">
          <img src={logo} alt="logo" />
        </LinkContainer>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </LinkContainer>
      </Nav>
      <Auth />
    </Navbar.Collapse>
  </Navbar>;

export default Menu;
