import { get, post } from './http';

export const registerUser = token => post('users/register', { token });
export const getTickets = () => get('tickets');
export const createTicket = newTicket => post('tickets', newTicket);
