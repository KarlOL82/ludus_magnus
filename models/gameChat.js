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
      type: DataTypes.DECIMAL(10, 2),
      allowNull: true
    },
    game_name: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    username: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: true
      }
    },
    // location_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'location',
    //     key: 'id',
    //     unique: false
    //   }
    // }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip'
  }
);

module.exports = Trip;
