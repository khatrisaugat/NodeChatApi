const sequalize = require("../helpers/db");

const Message = sequalize.define("messages", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: Sequelize.STRING,
  },
  room_id: {
    type: Sequelize.INTEGER,
  },
  unread: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
  isLiked: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  user_id: {
    type: Sequelize.INTEGER,
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
