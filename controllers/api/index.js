const router = require('express').Router();
const userRoutes = require('./user-routes');
const chatRoutes = require('./gameChat-routes')
const forumRoutes = require('./forum-routes')

router.use('/users', userRoutes);
router.use('/forums', forumRoutes);
router.use('/gameChat', chatRoutes);

module.exports = router;
