import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = ({ isAuthenticated }) =>
  <Jumbotron>
    <h1>Support Team</h1>
    <p>
      Help potential new customers to get on board. Go ahead and ceate a ticket
      on behalf of them.
    </p>
    {isAuthenticated
      ? <p>
          <Link className="btn btn-primary btn-lg" to="/newTicket">
            CREATE TICKET
          </Link>
        </p>
      : null}
  </Jumbotron>;

export default Home;
