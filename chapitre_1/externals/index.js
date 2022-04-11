const express = require('express');
const app = express();

const data = require('./api.json')
const axios = require('axios');

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.get('/', (req, res) => {
    res.send('home');
});

app.get('/game-of-thrones/json', (req, res) => {
    res.json(data);
});

app.get('/game-of-thrones/url', (req, res) => {
    axios.get("https://thronesapi.com/api/v2/Characters")
    .then(response => res.json(response.data))
});

app.get('/pokemons', (req, res) => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => res.json(response.data))
});

app.get('/pokemons/:id', (req, res) => {
    const x = req.params.id 
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then(response => {
        console.log(response.data.results[x])
        res.json(response.data.results[x]);
    })
});