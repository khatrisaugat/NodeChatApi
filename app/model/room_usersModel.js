const sequalize = require("../helpers/db");

const RoomUser = sequalize.define("room_users", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  room_id: {
    type: Sequelize.INTEGER,
  },
});
