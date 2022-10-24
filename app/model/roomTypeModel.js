const { DataTypes } = require("sequelize");
const sequalize = require("../helpers/db");

const RoomType = sequalize.define("room_types", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    defaultValue: "Standard",
  },
});
(async () => await RoomType.sync())();

module.exports = RoomType;
