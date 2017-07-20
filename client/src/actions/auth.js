import Auth0Lock from 'auth0-lock';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../services/constants';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
  autoclose: true,
  auth: {
    redirect: false,
    params: { scope: 'openid email' }
  }
});

function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  };
}

function loginError(error) {
  return {
    type: LOGIN_ERROR,
    error
  };
}

export function login() {
  // display the lock widget
  return dispatch => {
    lock.show();
  };
}

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

function logoutSuccess(profile) {
  return {
    type: LOGOUT_SUCCESS
  };
}

export function logout() {
  return dispatch => {
    localStorage.removeItem('id_token');
    localStorage.removeItem('profile');
    return dispatch(logoutSuccess());
  };
}

// Listen to authenticated event and get the profile of the user
export function doAuthentication() {
  return dispatch => {
    lock.on('authenticated', function(authResult) {
      lock.getProfile(authResult.idToken, function(error, profile) {
        if (error) {
          // handle error
          return dispatch(loginError(error));
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', authResult.idToken);
        return dispatch(loginSuccess(profile));
      });
    });
  };
}
