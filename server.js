const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const session = require('express-session');
// const sequelize = require('./config/connection');
const utils = require("util");
const mysql = require("mysql2");


const app = express();
const PORT = process.env.PORT || 3001;

app.set('view engine', 'handlebars');

app.engine('handlebars', handlebars({
    layoutsDir: __dirname + '/views/layouts',
    }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));
app.get('/', (req, res) => res.send('Hello World !'));

app.get('/', (req, res) => {
    //Serves the body of the page aka "main.handlebars" to the container //aka "index.handlebars"
    res.render('main', {layout : 'homepage'});
    });

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });