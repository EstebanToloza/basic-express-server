const express = require('express');
const router = express.Router();
const UserController = require("../controllers/UserController");

router.post('/user', (req, res) => UserController.addUser(req, res))
router.get('/user', (req, res) => UserController.getUsers(req, res))
router.get('/user/:id', (req, res) => UserController.getUserById(req, res))

module.exports = router;
