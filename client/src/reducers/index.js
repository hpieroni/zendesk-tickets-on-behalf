import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { routerReducer as router } from 'react-router-redux';
import { reducer as toastr } from 'react-redux-toastr';
import auth from './auth';
import tickets from './tickets';

export default combineReducers({
  router,
  form,
  toastr,
  auth,
  tickets
});
