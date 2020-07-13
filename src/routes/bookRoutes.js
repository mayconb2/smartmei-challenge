const express = require('express');
const router = express.Router();

const {addBookToMyCollection} = require('./../controllers/bookCotroller.js');

const app = express();

app.use(express.json());

router.post('/', addBookToMyCollection);

module.exports = router;