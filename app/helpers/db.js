const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("chatapi", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
