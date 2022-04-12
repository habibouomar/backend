const express = require('express');
const router = express.Router();

const data = require('../data.json')
const axios = require('axios');

router.get('/', (req, res) => {
    res.send('home');
});

router.get('/game-of-thrones/json', (req, res) => {
    res.json(data);
});

router.get('/game-of-thrones/url', (req, res) => {
    axios.get("https://thronesapi.com/api/v2/Characters")
    .then(response => res.json(response.data))
});

module.exports = router;