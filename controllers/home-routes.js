const router = require('express').Router();
const { User, Forum, GameChat } = require('../models');
const { withAuth, withNoAuth } = require('../utils/auth');
const { Op } = require('sequelize');

// Route "/"

// Route "/login"

router.get('/', (req, res) => {
    
    res.render('homepage', {layout : 'main'});
    });

// TODO: Add a comment describing the functionality of the withAuth middleware
router.get('/', withAuth, async (req, res) => {
  try {

    const where = {
      user_id: {
        [Op.ne]: req.session.user_id,
      },
    };

    const { search_name } = req.query;

    if(search_name) {
      where.name = {
        [Op.like]: `%${search_name}%`
      };
    }

    const userData = await Forum.findAll({
      where,
      include: {
        model: User,
        attributes: ['id', 'forumtitle'],
      },
    });

    const forums = userData.map((forum) => forum.get({ plain: true }));

    res.render('homepage', {
      forums,
      searchName: search_name,
      // TODO: Add a comment describing the functionality of this property
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/profilePage', withAuth, async (req, res) => {

  const userData = await User.findByPk(req.session.user_id, {
    attributes: ['id','user_name'],
    include: Forum
  });

  const user = userData.toJSON();

  console.log(user);

  res.render('user', {
    user,
    logged_in: req.session.logged_in,
  });
});

router.get('/login', withNoAuth, (req, res) => {
  res.render('login');
});

router.get('/signUp', withNoAuth, (req, res) => {
  res.render('signUp');
});

module.exports = router;