const {model, UserProfile} = require('sequelize');

class UserProfile extends model {}

UserProfile.init({
    userName:{
        type: STRING,
        allowNull: false
    },
    favoriteGame:{
        type: STRING [50],
        allowNull: true
    },
    userBio:{
        type: STRING [500],
        allowNull: true
    },
    location:{
        type: STRING[65],
        allowNull: false
    }
    
});

module.exports = UserProfile;