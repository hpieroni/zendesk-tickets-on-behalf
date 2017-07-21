const Zendesk = require('zendesk-node-api');
const zendeskConfig = require('../config/zendesk');
const utils = require('./utils');
const zendesk = new Zendesk(zendeskConfig);

const handleResponse = fn => async (...args) => {
  const response = await fn(...args);

  if (response.error) {
    throw new Error(response.description);
  }

  return response;
};

const findUser = handleResponse(async email => {
  const users = await zendesk.search.list(`query=type:user email:${email}`);
  return users[0];
});

const findOrCreateSubmitter = handleResponse(async email => {
  const user = await findUser(email);

  return user
    ? user
    : zendesk.users.create({
        name: utils.getEmailUsername(email),
        email,
        role: 'agent'
      });
});

const createTicket = newTicket =>
  handleResponse(zendesk.tickets.create(newTicket));

// This zendesk library doesn't suppot pagination.
const findTickets = handleResponse(async userEmail => {
  const user = await findUser(userEmail);

  return user
    ? zendesk.search.list(
        `query=type:ticket submitter_id:${user.id}&sort_by=created_at&sort_order=desc`
      )
    : [];
});

module.exports = {
  findUser,
  findTickets,
  findOrCreateSubmitter,
  createTicket
};
