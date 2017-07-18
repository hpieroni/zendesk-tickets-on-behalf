import { connect } from 'react-redux';
import { createTicket } from '../actions/tickets';
import NewTicketForm from '../components/NewTicketForm';

const mapStateToProps = ({ tickets: { isLoading, ticket, error } }) => ({
  isLoading,
  ticket,
  error
});

export default connect(mapStateToProps, { createTicket })(NewTicketForm);
