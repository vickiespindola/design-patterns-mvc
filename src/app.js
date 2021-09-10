const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
const main = require('./routes/main');
const about = require('./routes/about');

app.use(express.static('public'));

app.use('/', main);
app.use('/', about);

app.listen(PORT, () => {
    console.log('Servidor funcionando');
});