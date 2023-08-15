const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./user');
const Card = require('./card');

const Best = sequelize.define('bests', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  office: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  appointments_set: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  doors_knocked: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
})
User.hasMany(Best, {
  foreignKey: {
    allowNull: false
  }
})
Best.belongsTo(User);

Card.hasMany(Best, {
  foreignKey: {
    allowNull: false
  }
})
Best.belongsTo(Card);

module.exports = Best;