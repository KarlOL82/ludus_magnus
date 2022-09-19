const router = require('express').Router();
const { User, Forum, GameChat } = require('../models');
const { withAuth, withAuthAPI } = require('../utils/auth');
const { Op } = require('sequelize');



router.get('/', withAuth, async (req, res) => {
  try {
    
    const chatData = await GameChat.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const chats = chatData.map((gameChat) => gameChat.get({ plain: true }));
console.log(req.session.logged_in);
    
    res.render('homepage', {
      layout : 'main', 
      chats, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(req.session.logged_in);
  }
});


router.get('/', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    
    const users = userData.map((user) => user.get({ plain: true }));
console.log(req.session.logged_in);
    
    res.render('homepage', {
      layout : 'main', 
      users, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(req.session.logged_in);
  }
});


router.get('/', withAuth, async (req, res) => {
  try {
    
    const forumData = await Forum.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    
    const forums = forumData.map((forum) => forum.get({ plain: true }));
console.log(req.session.logged_in);
    
    res.render('forum', {
      layout : 'main', 
      users, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(req.session.logged_in);
  }
});



router.get('/profilePage', withAuth, async (req, res) => {

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