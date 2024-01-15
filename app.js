
const express = require('express')
const app = express()
const port = 3000

const rotas = require('./app/routes/route');

app.use('/', rotas);

app.use(express.static("app/public"));

app.set('view-engine', 'ejs');

app.set('views', './app/views');


app.listen(port)