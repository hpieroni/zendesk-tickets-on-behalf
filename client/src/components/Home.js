import React from 'react';
import Welcome from '../containers/Welcome';
import TicketsTable from '../containers/TicketsTable';

const Home = ({ isAuthenticated }) =>
  <div>
    {!isAuthenticated ? <Welcome /> : <TicketsTable />}
  </div>;

export default Home;
