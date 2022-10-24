const { DataTypes } = require("sequelize");
const sequalize = require("../helpers/db");
const RoomType = require("./roomTypeModel");
const User = require("./userModel");
const User_Rooms = require("./userRoomsModel");

const Room = sequalize.define("rooms", {
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

RoomType.hasMany(Room);
Room.belongsToMany(User, { through: User_Rooms });
User.belongsToMany(Room, { through: User_Rooms });
(async () => await Room.sync().then((room) => User_Rooms.sync()))();

module.exports = Room;
