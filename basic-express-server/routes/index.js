var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', (req, res) => {
  const person = {
    name: "Esteban",
    surname: "Toloza",
    age: 27
  }
  res.json(person)
});

router.post('/test', (req, res) => {
  const {body} = req;
  
  res.json(body)
})

module.exports = router;
