const express = require('express');
const router = express.Router();
const userController = require('./../controllers/userController.js');

const app = express();

app.use(express.json());

router.get('/', userController.getUser);

module.exports = router