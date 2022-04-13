const express = require('express');
const app = express();

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

const port = 3000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.get('/', (req, res) => {
    res.render('home')
});

app.post('/signup', (req, res) => {
    console.log(req.body.username) 
    console.log(req.body.password) 
    res.render('signup',{
        username: req.body.username 
    });
});