const Profiles = require('./userProfiles');
const gameChat = require('./gameChat.js');
cosnt Forum = require('./Forum.js');

Forum.hasMany(gameChat, {
    foreignKEy: 'forum_id',
});

gameChat.belongsTo(Forum, {
    foreignKey: 'forum_id',
});


module.exports = { Profiles, gameChat, Forum};