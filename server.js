const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
// const sequelize = require('./config/connection');
const utils = require("util");
const mysql = require("mysql2");


const app = express();
const PORT = process.env.PORT || 3001;

// app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static('public'));
app.get('/', (req, res) => res.send('Hello World !'));

const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'N3buchadnezzar!3',
      database: 'ludus_db'
    },
    console.log(`Connected to the teamDirectory_db database.`)
);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });