const router = require('express').Router();
const userRoutes = require('./user-routes');
const chatRoutes = require('./gameChat-routes')

router.use('/users', userRoutes);
router.use('/gameChat', chatRoutes);

module.exports = router;
