const { DataTypes } = require('sequelize');
const sequelize = require('../database/config');

const Appointment = sequelize.define('appointments', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  city: {
    type: DataTypes.STRING,
    allowNull: true
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true
  },
  phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true
  },
  user_last_name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  end_at: {
    type: DataTypes.DATE,
    allowNull: true
  },
  notes: {
    type: DataTypes.STRING,
    allowNull: true
  },
  formatted_phone_number: {
    type: DataTypes.STRING,
    allowNull: true
  },
  latitude: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  longitude: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  timezone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  office: {
    type: DataTypes.STRING,
    allowNull: true
  },
  team: {
    type: DataTypes.STRING,
    allowNull: true
  },
})

module.exports = Appointment;