const sequalize = require("../helpers/db");

const RoomType = sequalize.define("room_types", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: Sequelize.STRING,
    defaultValue: "Standard",
  },
});
