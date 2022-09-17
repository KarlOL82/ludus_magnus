const path = require('path');
const express = require('express');
const exhbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
const utils = require("util");
const mysql = require("mysql2");
const sequelize = require('./config/connection');

// const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

const handlebars = exhbs.create();

// const sess = {
//     secret: process.env.SESSION_SECRET,
//     cookie: {
//       maxAge: 60 * 60 * 1000,
//     },
//     resave: false,
//     saveUninitialized: true,
//     store: new SequelizeStore({
//       db: sequelize,
//     }),
//   };
  
//   app.use(session(sess));

 
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');



    
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// app.use(express.static('public'));


// app.get('/', (req, res) => {
    
//     res.render('homepage', {layout : 'main'});
//     });


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });