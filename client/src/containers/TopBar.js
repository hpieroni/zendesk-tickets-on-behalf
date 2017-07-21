import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import TopBar from '../components/TopBar';

const TopBarContainer = ({ isAuthenticated }) =>
  <TopBar isAuthenticated={isAuthenticated} />;

function mapStateToProps(state) {
  const { isAuthenticated } = state.auth;
  return {
    isAuthenticated
  };
}

export default withRouter(connect(mapStateToProps, {})(TopBarContainer));
