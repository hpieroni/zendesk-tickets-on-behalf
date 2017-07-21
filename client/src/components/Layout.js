import React from 'react';
import TopBar from '../containers/TopBar';

const Layout = ({ children }) =>
  <div>
    <TopBar />
    <div className="container">
      {children}
    </div>
  </div>;

export default Layout;
