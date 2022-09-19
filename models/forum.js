
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
    
    forum_title: {
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
    previewText: {
        type: DataTypes.STRING,
        allowNull: false,
        validate:{
            len: [100],
        }   
    }
},
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'forum',
  }
);

module.exports = Forum;