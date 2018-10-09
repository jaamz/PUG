require('dotenv').config();

const express = require('express');

const indexRouter = require('./routes/index');

const app = express();

const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

app.listen(port, () => console.log(`PUG API listening on port ${port} 🐶 🍵!`));

module.exports = app;
