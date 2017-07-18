export const CREATE_TICKET_REQUEST = 'CREATE_TICKET_REQUEST';
export const CREATE_TICKET_SUCCESS = 'CREATE_TICKET_SUCCESS';
export const CREATE_TICKET_FAILED = 'CREATE_TICKET_FAILED';

export function createTicket() {
  return dispatch => {
    dispatch(createTicketRequest());

    //TODO: Needs Refactor
    const options = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        subject: '123123',
        comment: {
          body: 'The smoke is very colorful.'
        }
      })
    };

    fetch('api/tickets', options)
      .then(response => response.json().then(json => ({ json, response })))
      .then(({ json, response }) => {
        response.ok
          ? dispatch(createTicketSuccess(json))
          : dispatch(createTicketFailed(json));
      });
  };
}

export function createTicketSuccess(ticket) {
  return {
    type: CREATE_TICKET_SUCCESS,
    ticket
  };
}

export function createTicketFailed(error) {
  return {
    type: CREATE_TICKET_FAILED,
    error
  };
}

export function createTicketRequest() {
  return { type: CREATE_TICKET_REQUEST };
}
