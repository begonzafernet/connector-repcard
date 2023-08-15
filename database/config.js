const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_URI, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false,
  define: {
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
}
);
module.exports = sequelize;