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

const findOrCreateSubmitter = async email => {
  const users = await zendesk.search.list(`query=type:user email:${email}`);

  return users.length
    ? users[0]
    : zendesk.users.create({
        name: utils.getEmailUsername(email),
        email,
        role: 'agent'
      });
};

const createTicket = newTicket => zendesk.tickets.create(newTicket);

module.exports = {
  findOrCreateSubmitter: handleResponse(findOrCreateSubmitter),
  createTicket: handleResponse(createTicket)
};
