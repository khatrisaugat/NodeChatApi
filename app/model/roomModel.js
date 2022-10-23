const sequalize = require("../helpers/db");

const Room = sequalize.define("rooms", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: "Standard",
  },
  room_type_id: {
    type: Sequelize.INTEGER,
    defaultValue: 1,
  },
  created_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  updated_at: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});
