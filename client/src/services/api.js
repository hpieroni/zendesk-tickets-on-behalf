import { get, post } from './http';

export const getTickets = () => get('tickets');
export const createTicket = newTicket => post('tickets', newTicket);
