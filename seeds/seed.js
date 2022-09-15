const sequelize = require('../config/connection');
const { User, GameCHat, Forum } = require('../models');

const userData = require('./userData.json');
const foodItemData = require('./foodItemData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  await GameCHat.bulkCreate(foodItemData, {
    individualHooks: true,
    returning: true,
  });

  await Forum.bulkCreate(foodItemData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
