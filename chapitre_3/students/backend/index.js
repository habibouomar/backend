const express = require('express');
const app = express();

app.use(express.json());

const port = 3000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

let students = ["julien", "marc"]

app.get('/', (req, res) => {
    res.send('home')
});

app.get('/students', (req, res) => {
    res.json(students);
});

app.post('/students', (req, res) => {
    console.log(req.body.name);
    res.send();
});