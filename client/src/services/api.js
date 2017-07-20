import { post } from './http';

export const createTicket = newTicket => post('tickets', newTicket);
