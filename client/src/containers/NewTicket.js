import React from 'react';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form';
import { createTicket } from '../actions/tickets';
import NewTicket from '../components/NewTicket';

const NewTicketContainer = props => <NewTicket {...props} />;

const selector = formValueSelector('newTicket');

export default connect(
  state => ({ description: selector(state, 'description') }),
  { onSubmit: createTicket }
)(
  reduxForm({
    form: 'newTicket'
  })(NewTicketContainer)
);
