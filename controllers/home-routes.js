const router = require('express').Router();
const { User, Forum, GameChat } = require('../models');
const { withAuth, withAuthAPI } = require('../utils/auth');
const { Op } = require('sequelize');

// Route "/"

// Route "/login"

// router.get('/', (req, res) => {
    
//     res.render('homepage', );
//     });


router.get('/', async (req, res) => {
  try {
    // Get all projects and JOIN with user data
    const chatData = await GameChat.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const chats = chatData.map((gameChat) => gameChat.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', {
      layout : 'main', 
      chats, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profilePage', withAuthAPI, async (req, res) => {

  const dbUserData = await User.findByPk(req.session.user_id, {
    attributes: ['id','user_name'],
    include: Forum
  });

  const user = dbUserData.toJSON();

  console.log(user);

  res.render('user', {
    user,
    logged_in: req.session.logged_in,
  });
});

router.get('/login',  (req, res) => {
  res.render('login');
});

router.get('/signUp',  (req, res) => {
  res.render('signUp');
});

module.exports = router;