import React from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = props =>
  <Jumbotron>
    <h1>Support Team</h1>
    <p>
      Help potential new customers to get on board. Go ahead and open a ticket
      on behalf of them.
    </p>
    <p>
      <Link className="btn btn-primary btn-lg" to="/newTicket">
        OPEN TICKET
      </Link>
    </p>
  </Jumbotron>;

export default Home;
