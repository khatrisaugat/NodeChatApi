const sequalize = require("../helpers/db");

const User_Rooms = sequalize.define("user_rooms", {}, { timestamps: false });

module.exports = User_Rooms;
