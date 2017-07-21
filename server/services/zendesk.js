const Zendesk = require('zendesk-node-api');
const zendeskConfig = require('../config/zendesk');
const utils = require('./utils');
const zendesk = new Zendesk(zendeskConfig);

const _handleCreation = fn => async (...args) => {
  const response = await fn(...args);

  if (response.error) {
    throw new Error(response.description);
  }

  return response;
};

const findUser = async email => {
  const users = await zendesk.search.list(`query=type:user email:${email}`);
  return users[0];
};

const createUser = _handleCreation(email =>
  zendesk.users.create({
    name: utils.getEmailUsername(email),
    email,
    role: 'agent',
    verified: true
  })
);

const registerUser = async email => {
  const user = await findUser(email);

  if (!user) {
    createUser(email);
  }
};

const createTicket = _handleCreation(newTicket =>
  zendesk.tickets.create(newTicket)
);

// This zendesk library doesn't suppot pagination.
const findTickets = async userEmail => {
  const user = await findUser(userEmail);

  return user
    ? zendesk.search.list(`query=type:ticket submitter_id:${user.id}`)
    : [];
};

module.exports = {
  findUser,
  registerUser,
  findTickets,
  createTicket
};
