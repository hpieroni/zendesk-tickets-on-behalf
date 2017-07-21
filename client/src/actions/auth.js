import Auth0Lock from 'auth0-lock';
import { toastr } from 'react-redux-toastr';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from '../services/constants';
import * as api from '../services/api';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

export const SHOW_REGISTERING_LOADING = 'SHOW_REGISTERING_LOADING';
export const HIDE_REGISTERING_LOADING = 'HIDE_REGISTERING_LOADING';

const lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
  autoclose: true,
  auth: {
    redirect: false,
    params: { scope: 'openid email' }
  }
});

function showRegisteringLoading() {
  return {
    type: SHOW_REGISTERING_LOADING
  };
}

function hideRegisteringLoading() {
  return {
    type: HIDE_REGISTERING_LOADING
  };
}

// This is used to create a zendesk agent user if not exists
export function register(authResult) {
  return dispatch => {
    dispatch(showRegisteringLoading());
    return api.registerUser(authResult.idToken).then(({ json, response }) => {
      if (response.ok) {
        lock.getProfile(authResult.idToken, function(error, profile) {
          if (error) {
            dispatch(loginFailed(error));
            dispatch(hideRegisteringLoading());
            return;
          }

          localStorage.setItem('profile', JSON.stringify(profile));
          localStorage.setItem('id_token', authResult.idToken);
          dispatch(loginSuccess(profile));
          dispatch(hideRegisteringLoading());
        });
      } else {
        dispatch(loginFailed(json));
        dispatch(hideRegisteringLoading());
        toastr.error('Error', json.description);
      }
    });
  };
}

function loginSuccess(profile) {
  return {
    type: LOGIN_SUCCESS,
    profile
  };
}

function loginFailed(error) {
  return {
    type: LOGIN_FAILED,
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
    lock.on('authenticated', authResult => dispatch(register(authResult)));
  };
}
