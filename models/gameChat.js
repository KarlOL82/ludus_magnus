const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class GameChat extends Model {}


GameChat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    chat_name: {
      type: DataTypes.STRING,
      allowNull: true
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 1
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        
      }
    },
    chatText: {
      type: DataTypes.TEXT('long'),
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'gameChat'
  }
);

module.exports = GameChat;
