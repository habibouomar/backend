const express = require('express');
const app = express();

const port = 8000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.get('/', (req, res) => {
    res.send('Authors API');
});

var authors = [
    {
        name: "Lawrence Nowell",
        nationality: "UK",
        books: ["Beowulf"]
    },
    {
        name: "William Shakespeare",
        nationality: "UK",
        books: ["Hamlet", "Othello", "Romeo and Juliet", "MacBeth"]
    },
    {
        name: "Charles Dickens",
        nationality: "US",
        books: ["Oliver Twist", "A Christmas Carol"]
    },
    {
        name: "Oscar Wilde",
        nationality: "UK",
        books: ["The Picture of Dorian Gray", "The Importance of Being Earnest"]
    },
]

app.get('/authors/:id', (req, res) => {
    const x = req.params.id 
    res.send(`${authors[x].name} , ${authors[x].nationality}`);
});

app.get('/authors/:id/books', (req, res) => {
    const x = req.params.id 
    res.send(`${authors[x].books}`);
});

app.get('/json/authors/:id', (req, res) => {
    const x = req.params.id 
    res.json({
        name: authors[x].name,
        nationality: authors[x].nationality
    })
});



