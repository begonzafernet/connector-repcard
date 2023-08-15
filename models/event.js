const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Event = sequelize.define('events', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  place: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  individual_goal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  company_goal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  individual_goal_canvasser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  company_goal_canvasser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  upcoming: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
})

module.exports = Event;