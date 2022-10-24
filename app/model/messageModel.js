const { DataTypes } = require("sequelize");
const sequalize = require("../helpers/db");
const Room = require("./roomModel");
const User = require("./userModel");

const Message = sequalize.define("messages", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  message: {
    type: DataTypes.STRING,
  },
  unread: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  isLiked: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

Room.hasMany(Message);
User.hasMany(Message);
(async () => await Message.sync())();
