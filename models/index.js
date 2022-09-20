const User = require('./user');
const GameChat = require('./gameChat');
const Forum = require('./forum');

Forum.hasMany(GameChat, {
    foreignKey: 'forum_id',
});

GameChat.belongsTo(Forum, {
    foreignKey: 'forum_id',
});

User.hasMany(GameChat, {
    foreignKey: 'user_id',
});

GameChat.belongsTo(User, {
    foreignKey: 'user_id',
});
module.exports = { User, GameChat, Forum};