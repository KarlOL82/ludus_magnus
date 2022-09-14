const path = require('path');
const express = require('express');
const exhbs = require('express-handlebars');
const session = require('express-session');

const utils = require("util");
const mysql = require("mysql2");


const app = express();
const PORT = process.env.PORT || 3001;

const handlebars = exhbs.create(); 
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));


app.get('/', (req, res) => {
    
    res.render('main', {layout : 'homepage'});
    });


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });