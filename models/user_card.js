const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./user');
const Card = require('./card');

const UserCard = sequelize.define('user_cards', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  new: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  }
})
User.hasMany(UserCard, {
  foreignKey: {
    allowNull: false
  }
})
UserCard.belongsTo(User);

Card.hasMany(UserCard, {
  foreignKey: {
    allowNull: false
  }
})
UserCard.belongsTo(Card);

module.exports = UserCard;