import React from 'react';
import Menu from './Menu';

const Layout = ({ children }) =>
  <div>
    <Menu />
    <div className="container">
      {children}
    </div>
  </div>;

export default Layout;
