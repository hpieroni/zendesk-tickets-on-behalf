import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login, doAuthentication, logout } from '../actions/auth';
import Auth from '../components/Auth';

class AuthContainer extends Component {
  componentWillMount() {
    this.props.doAuthentication();
  }

  render() {
    return (
      <Auth
        isAuthenticated={this.props.isAuthenticated}
        profile={this.props.profile}
        login={this.props.login}
        logout={this.props.logout}
      />
    );
  }
}

function mapStateToProps(state) {
  const { isAuthenticated, profile } = state.auth;
  return {
    isAuthenticated,
    profile
  };
}

export default connect(mapStateToProps, {
  login,
  doAuthentication,
  logout
})(AuthContainer);
