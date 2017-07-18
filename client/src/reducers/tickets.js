import {
  CREATE_TICKET_REQUEST,
  CREATE_TICKET_SUCCESS,
  CREATE_TICKET_FAILED
} from '../actions/tickets';

export default function(state = { isLoading: false }, action) {
  switch (action.type) {
    case CREATE_TICKET_REQUEST:
      return {
        isLoading: true
      };
    case CREATE_TICKET_SUCCESS:
      return {
        isLoading: false,
        ticket: action.ticket
      };
    case CREATE_TICKET_FAILED:
      return {
        isLoading: false,
        error: action.error
      };
    default:
      return state;
  }
}
