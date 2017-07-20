const express = require('express');
const Zendesk = require('zendesk-node-api');
const showdown = require('showdown');
const router = express.Router();
const zendeskConfig = require('../config/zendesk');

const converter = new showdown.Converter();
const zendesk = new Zendesk(zendeskConfig);

router.post('/', async (req, res) => {
  const { email, subject, description } = req.body;
  // TODO: Validate fields https://github.com/ctavan/express-validator
  const response = await zendesk.tickets.create({
    requester: {
      name: email.split('@')[0],
      email
    },
    subject,
    comment: {
      html_body: converter.makeHtml(description)
    }
  });

  if (response.error) {
    res.status(400).json(response);
  } else {
    res.status(201).json(response);
  }
});

module.exports = router;
