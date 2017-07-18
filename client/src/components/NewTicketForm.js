import React from 'react';

const NewTicketForm = ({ isLoading, ticket, error, createTicket }) =>
  <div>
    <button onClick={createTicket}>Create new ticket</button>
    {isLoading ? <p>Loading...</p> : <div />}
    {ticket ? <p>EXITO</p> : <div />}
    {error ? <p>Error</p> : <div />}
  </div>;

export default NewTicketForm;
