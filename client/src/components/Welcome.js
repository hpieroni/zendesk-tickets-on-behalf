import React from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import LoadingPage from './LoadingPage';

const Welcome = ({ login, isRegistering }) =>
  <div>
    {isRegistering
      ? <LoadingPage />
      : <Jumbotron>
          <h1>Support Team</h1>
          <p>
            Help potential new customers to get on board. Go ahead and ceate a
            ticket on behalf of them.
          </p>
          <p>
            <Button bsStyle="primary" bsSize="large" onClick={login}>
              LOG IN
            </Button>
          </p>
        </Jumbotron>}
  </div>;

export default Welcome;
