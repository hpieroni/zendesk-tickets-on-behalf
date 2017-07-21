const express = require('express');
const showdown = require('showdown');
const zendesk = require('../services/zendesk');
const utils = require('../services/utils');

const router = express.Router();
const converter = new showdown.Converter();
const ticketSchema = {
  email: {
    notEmpty: true,
    isEmail: {
      errorMessage: 'Invalid Email'
    }
  },
  subject: { notEmpty: true },
  description: { notEmpty: true }
};

const validateNewTicketRequest = async req => {
  req.checkBody(ticketSchema);
  const error = await req.getValidationResult();
  if (!error.isEmpty()) {
    error.throw();
  }
};

router.post('/', async (req, res) => {
  try {
    await validateNewTicketRequest(req);

    const { email, subject, description } = req.body;
    const submitter = await zendesk.findOrCreateSubmitter(req.user.email);
    const response = await zendesk.createTicket({
      submitter_id: submitter.id,
      requester: {
        name: utils.getEmailUsername(email),
        email
      },
      subject,
      comment: {
        html_body: converter.makeHtml(description)
      }
    });

    res.status(201).json(response);
  } catch (error) {
    res.status(error.message === 'Validation failed' ? 400 : 500);
    res.json({ description: error.message });
  }
});

module.exports = router;
