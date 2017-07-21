import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGOUT_SUCCESS,
  SHOW_REGISTERING_LOADING,
  HIDE_REGISTERING_LOADING
} from '../actions/auth';
import jwtDecode from 'jwt-decode';

const checkTokenExpiry = () => {
  const jwt = localStorage.getItem('id_token');

  if (jwt) {
    const jwtExp = jwtDecode(jwt).exp;
    const expiryDate = new Date(0);
    expiryDate.setUTCSeconds(jwtExp);

    if (new Date() < expiryDate) {
      return true;
    }
  }
  return false;
};

const getProfile = () => JSON.parse(localStorage.getItem('profile'));

export default (
  state = {
    isRegistering: false,
    isAuthenticated: checkTokenExpiry(),
    profile: getProfile(),
    error: ''
  },
  action
) => {
  switch (action.type) {
    case SHOW_REGISTERING_LOADING:
      return {
        ...state,
        isRegistering: true
      };
    case HIDE_REGISTERING_LOADING:
      return {
        ...state,
        isRegistering: false
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        profile: action.profile,
        error: ''
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuthenticated: false,
        profile: null,
        error: action.error
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        isAuthenticated: false,
        profile: null,
        error: ''
      };
    default:
      return state;
  }
};
