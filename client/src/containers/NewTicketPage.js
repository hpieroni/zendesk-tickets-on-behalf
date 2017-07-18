import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { createTicket } from '../actions/tickets';
import NewTicketForm from '../components/NewTicketForm';

const NewTicketPage = props => <NewTicketForm {...props} />;

export default connect(() => ({}), { onSubmit: createTicket })(
  reduxForm({
    form: 'newTicket'
  })(NewTicketPage)
);
