const express = require('express');
const Zendesk = require('zendesk-node-api');
const router = express.Router();
const { ZENDESK_URL, ZENDESK_EMAIL, ZENDESK_TOKEN } = process.env;

const zendesk = new Zendesk({
  url: ZENDESK_URL,
  email: ZENDESK_EMAIL,
  token: ZENDESK_TOKEN
});

router.post('/', async (req, res) => {
  const response = await zendesk.tickets.create(req.body);

  if (response.error) {
    res.status(400).json(response);
  } else {
    res.status(201).json(response);
  }
});

module.exports = router;
