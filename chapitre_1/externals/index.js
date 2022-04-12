const express = require('express');
const app = express();

const pokeapi = require('./routes/pokeapi');
const gameOfThrones = require('./routes/gameOfThrones');

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.use(pokeapi);
app.use(gameOfThrones);