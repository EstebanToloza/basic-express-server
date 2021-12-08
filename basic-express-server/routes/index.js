var express = require('express');
var router = express.Router();

const users = [];
let counter = 1;

router.post('/user', (req, res) => {
  const {body} = req;

  const {name} = body;

  if (body && name) {

    const data = {
      id: counter,
      name: name,
    };

    counter = counter + 1;
    users.push(data);

    return res.sendStatus(200);
  } else {
    return res.sendStatus(400);
  }
})

router.get('/user', (req, res) => {
  return res.json(users)
})

router.get('/user/:id', (req, res) => {
  const { params } = req;

  const user = users.find((user) => {
    return user.id == params.id
  })

  if ( user ) {
    return res.json(user)
  } else {
    return res.sendStatus(404)
  };
  
})

module.exports = router;
