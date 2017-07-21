import { LOGIN_SUCCESS, LOGIN_FAILED, LOGOUT_SUCCESS } from '../actions/auth';
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
    isAuthenticated: checkTokenExpiry(),
    profile: getProfile(),
    error: ''
  },
  action
) => {
  switch (action.type) {
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
        profile: null
      };
    default:
      return state;
  }
};
