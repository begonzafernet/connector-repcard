const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./user');
const Reward = require('./reward');

const UserReward = sequelize.define('user_rewards', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})
User.hasMany(UserReward, {
  foreignKey: {
    allowNull: false
  }
})
UserReward.belongsTo(User);

Reward.hasMany(UserReward, {
  foreignKey: {
    allowNull: false
  }
})
UserReward.belongsTo(Reward);

module.exports = UserReward;