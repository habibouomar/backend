const express = require('express');
const app = express();

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

const data = require('./translations.json')

const port = 3000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});

app.get('/', (req, res) => {
    res.render('home', {
        pageTitle: data.fr.pageTitle,
        title: data.fr.title
    });
});

app.get('/:lang?', (req, res) => {
    const lang = req.params.lang

    for (const item in data) {
        if (item == lang) {
            return res.render('home', {
                pageTitle: data[item].pageTitle,
                title: data[item].title
            });
        }
    }
    // si on arrive ici, c'est que cela veut dire qu'on à rien trouvé
    res.send("Page Introuvable")
});

