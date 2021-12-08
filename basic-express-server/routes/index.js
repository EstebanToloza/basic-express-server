var express = require('express');
var router = express.Router();

const users = [];

router.post('/user', (req, res) => {
  const {body} = req;

  const {name} = body;

  if (body && name) {
    users.push(name);
    return res.sendStatus(200);
  } else {
    return res.sendStatus(400);
  }
})

router.get('/user', (req, res) => {
  return res.json(users)
})

module.exports = router;
