import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';
import Welcome from '../components/Welcome';

const WelcomeContainer = ({ login, isRegistering }) =>
  <Welcome login={login} isRegistering={isRegistering} />;

function mapStateToProps(state) {
  const { isRegistering } = state.auth;
  return {
    isRegistering
  };
}

export default connect(mapStateToProps, { login })(WelcomeContainer);
