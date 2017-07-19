import { toastr } from 'react-redux-toastr';
import { reset } from 'redux-form';

export const CREATE_TICKET_REQUEST = 'CREATE_TICKET_REQUEST';
export const CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';
export const CREATE_TICKET_FAILED = 'CREATE_TICKET_FAILED';

export function createTicket(newTicket) {
  return dispatch => {
    dispatch(createTicketRequest(newTicket));
    //TODO: Needs Refactor
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newTicket)
    };

    return fetch('api/tickets', options)
      .then(response => response.json().then(json => ({ json, response })))
      .then(({ json, response }) => {
        if (response.ok) {
          dispatch(createTicketSuccess());
          dispatch(reset('newTicket'));
          toastr.success('Succes', 'ticket created');
        } else {
          dispatch(createTicketFailed(json));
          toastr.error('Error', json.description);
        }
      });
  };
}

export const createTicketSuccess = () => ({ type: CREATE_TICKET_SUCCESS });
export const createTicketFailed = error => ({
  type: CREATE_TICKET_FAILED,
  error
});
export const createTicketRequest = ticket => ({
  type: CREATE_TICKET_REQUEST,
  ticket
});
