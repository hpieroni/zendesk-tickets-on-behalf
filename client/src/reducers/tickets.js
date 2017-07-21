import {
  LOAD_TICKETS_REQUEST,
  LOAD_TICKETS_SUCCESS,
  LOAD_TICKETS_FAILED
} from '../actions/tickets';

export default (
  state = {
    isLoading: false,
    data: []
  },
  action
) => {
  switch (action.type) {
    case LOAD_TICKETS_REQUEST:
      return {
        isLoading: true,
        data: []
      };
    case LOAD_TICKETS_SUCCESS:
      return {
        isLoading: false,
        data: action.tickets
      };
    case LOAD_TICKETS_FAILED:
      return {
        isLoading: false,
        data: []
      };
    default:
      return state;
  }
};
