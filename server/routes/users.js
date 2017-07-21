const express = require('express');
const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwt');
const router = express.Router();
const zendesk = require('../services/zendesk');

const verifyAndDecodeJwt = token => jwt.verify(token, jwtConfig.secret);

router.post('/register', async (req, res) => {
  try {
    const { email } = verifyAndDecodeJwt(req.body.token);
    await zendesk.registerUser(email);
    res.status(200).end();
  } catch (error) {
    res.status(400).json({ description: 'Token inválido' });
  }
});

module.exports = router;
