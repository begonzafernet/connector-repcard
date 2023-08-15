const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');
const User = require('./user');

const UserDataHistorial = sequelize.define('user_data_historial', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  office: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  team: {
    type: DataTypes.STRING,
    allowNull: false
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
  avg_doors_knocked: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  reviews: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  avg_ratings: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0
  },
  referrals: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  leads_created: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  sales_customer_created: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  recruits_added: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  video_views: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  engagements: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
})

User.hasMany(UserDataHistorial, {
  foreignKey: {
    allowNull: false
  }
})
UserDataHistorial.belongsTo(User);

module.exports = UserDataHistorial;