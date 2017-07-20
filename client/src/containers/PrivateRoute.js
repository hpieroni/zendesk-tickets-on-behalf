import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

const PrivateRoute = ({ component, isAuthenticated, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      isAuthenticated
        ? React.createElement(component, props)
        : <Redirect
            to={{
              pathname: '/',
              state: { from: props.location }
            }}
          />}
  />;

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default withRouter(connect(mapStateToProps)(PrivateRoute));
