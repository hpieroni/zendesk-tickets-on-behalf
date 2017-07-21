import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadTickets } from '../actions/tickets';
import TicketsTable from '../components/TicketsTable';

class TicketsTableContainer extends Component {
  componentWillMount() {
    this.props.loadTickets();
  }

  render() {
    return (
      <TicketsTable
        tickets={this.props.data}
        isLoading={this.props.isLoading}
        onRefresh={this.props.loadTickets}
      />
    );
  }
}

function mapStateToProps({ tickets }) {
  return {
    data: tickets.data,
    isLoading: tickets.isLoading
  };
}

export default connect(mapStateToProps, { loadTickets })(TicketsTableContainer);
