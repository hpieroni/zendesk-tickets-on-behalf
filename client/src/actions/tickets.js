import { toastr } from 'react-redux-toastr';
import { push } from 'react-router-redux';
import * as api from '../services/api';

export const LOAD_TICKETS_REQUEST = 'LOAD_TICKETS_REQUEST';
export const LOAD_TICKETS_SUCCESS = 'LOAD_TICKETS_SUCCESS';
export const LOAD_TICKETS_FAILED = 'LOAD_TICKETS_FAILED';

export const CREATE_TICKET_REQUEST = 'CREATE_TICKET_REQUEST';
export const CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';
export const CREATE_TICKET_FAILED = 'CREATE_TICKET_FAILED';

export function loadTickets() {
  return dispatch => {
    dispatch(loadTicketsRequest());
    return api.getTickets().then(({ json, response }) => {
      if (response.ok) {
        dispatch(loadTicketsSuccess(json));
      } else {
        dispatch(loadTicketsFailed(json));
        toastr.error('Error', json.description);
      }
    });
  };
}

export const loadTicketsRequest = () => ({
  type: LOAD_TICKETS_REQUEST
});
export const loadTicketsSuccess = tickets => ({
  type: LOAD_TICKETS_SUCCESS,
  tickets
});
export const loadTicketsFailed = error => ({
  type: CREATE_TICKET_FAILED,
  error
});

export function createTicket(newTicket) {
  return dispatch => {
    dispatch(createTicketRequest(newTicket));
    return api.createTicket(newTicket).then(({ json, response }) => {
      if (response.ok) {
        dispatch(createTicketSuccess());
        dispatch(push('/'));
        toastr.success('Succes', 'Ticket created');
      } else {
        dispatch(createTicketFailed(json));
        toastr.error('Error', json.description);
      }
    });
  };
}

export const createTicketRequest = ticket => ({
  type: CREATE_TICKET_REQUEST,
  ticket
});
export const createTicketSuccess = () => ({ type: CREATE_TICKET_SUCCESS });
export const createTicketFailed = error => ({
  type: CREATE_TICKET_FAILED,
  error
});
