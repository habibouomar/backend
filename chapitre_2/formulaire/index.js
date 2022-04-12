const express = require('express');
const app = express();

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

const port = 3000;
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});