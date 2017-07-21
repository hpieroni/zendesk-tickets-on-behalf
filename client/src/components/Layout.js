import React from 'react';
import TopBar from './TopBar';

const Layout = ({ children }) =>
  <div>
    <TopBar />
    <div className="container">
      {children}
    </div>
  </div>;

export default Layout;
