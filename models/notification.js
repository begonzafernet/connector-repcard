const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./user');

const Notification = sequelize.define('notifications', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

User.hasMany(Notification, {
  foreignKey: {
    allowNull: false
  }
})
Notification.belongsTo(User);

module.exports = Notification;