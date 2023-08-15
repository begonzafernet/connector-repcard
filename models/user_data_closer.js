const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./user');

const UserDataCloser = sequelize.define('user_data_closer', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  sales: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

User.hasMany(UserDataCloser, {
  foreignKey: {
    allowNull: false
  }
})
UserDataCloser.belongsTo(User);

module.exports = UserDataCloser;