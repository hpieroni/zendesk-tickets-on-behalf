import React from 'react';
import {
  Navbar,
  Nav,
  NavDropdown,
  MenuItem,
  Button,
  Image
} from 'react-bootstrap';

const Auth = ({ isAuthenticated, profile, login, logout }) =>
  <div>
    {!isAuthenticated
      ? <Navbar.Form pullRight>
          <Button bsStyle="primary" className="btn-margin" onClick={login}>
            LOG IN
          </Button>
        </Navbar.Form>
      : <Nav pullRight>
          <NavDropdown
            id="auth-credentials"
            className="auth-credentials"
            eventKey={2}
            title={
              <span>
                <Image src={profile.picture} height="30px" circle />
                {profile.nickname}
              </span>
            }
          >
            <MenuItem eventKey={2.1} onClick={logout}>
              Log Out
            </MenuItem>
          </NavDropdown>
        </Nav>}
  </div>;

export default Auth;
