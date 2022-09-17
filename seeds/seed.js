const sequelize = require('../config/connection');
const { User, GameChat, Forum } = require('../models');

const userData = require('./userData.json');
const chatData = require('./chatData.json');

console.log(userData);
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await GameChat.bulkCreate(chatData, {
    individualHooks: true,
    returning: true,
  });

  // await Forum.bulkCreate(foodItemData, {
  //   individualHooks: true,
  //   returning: true,
  // });

  process.exit(0);
};

seedDatabase();
