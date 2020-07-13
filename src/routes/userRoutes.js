const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController.js');

const { getUser, createUser} = userController;

const app = express();

router.get('/:id', getUser);

router.post('/', createUser)

module.exports = router