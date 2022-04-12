const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/pokemons/:limit/:offset', (req, res) => {
    const limit = req.params.limit 
    const offset = req.params.offset
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => res.json(response.data))
});

router.get('/pokemons/:id', (req, res) => {
    const x = req.params.id 
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => {
        console.log(response.data.results[x])
        res.json(response.data.results[x]);
    })
});

module.exports = router;