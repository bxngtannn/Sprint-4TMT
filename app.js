const express = require('express');

const app = express();

const path = require('path');

const port = 3030;



app.set('view engine', 'ejs');

app.set('views',path.join('views'))

app.use(express.static('public'));

const indexRouter = require('./routes/index')

const usersRouter = require('./routes/users')

app.use('/', indexRouter);
app.use('/', usersRouter);


app.get('/header', (req, res) => { res.render('./partials/header')})
app.get('/footer', (req, res) => { res.render('./partials/footer')})

app.listen(port, () => console.log(`Servidor funcionando en el puerto ${port}!`));