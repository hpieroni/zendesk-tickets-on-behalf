import React from 'react';
import { connect } from 'react-redux';
import Home from '../components/Home';

const HomeContainer = ({ isAuthenticated }) =>
  <Home isAuthenticated={isAuthenticated} />;

function mapStateToProps(state) {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated
  };
}

export default connect(mapStateToProps, {})(HomeContainer);
