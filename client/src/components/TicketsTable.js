import React from 'react';
import { Link } from 'react-router-dom';
import { Table } from 'react-bootstrap';

const TicketRow = ({ id, subject, requester_id, status }) =>
  <tr>
    <td>
      {id}
    </td>
    <td>
      {subject}
    </td>
    <td>
      {requester_id}
    </td>
    <td>
      {status}
    </td>
  </tr>;

const TicketsTable = ({ tickets, isLoading }) =>
  <div>
    <Link
      className="btn btn-primary pull-right margin-table-btn"
      to="/newTicket"
    >
      NEW TICKET
    </Link>

    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>Subject</th>
          <th>Requester ID</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => <TicketRow key={ticket.id} {...ticket} />)}
      </tbody>
    </Table>
    {isLoading &&
      <p>
        <i>Loading...</i>
      </p>}
  </div>;

export default TicketsTable;