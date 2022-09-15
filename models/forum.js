
const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Forum extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Forum.init(
  {
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // username: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    forumtitle: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len:[30],
      },
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [30],
      },
    },
    feedpost: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [500],
        }   
    }
},
  {
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'forum',
  }
);

module.exports = Forum;