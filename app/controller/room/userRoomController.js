const User_Room = require("../../model/userRoomsModel");

exports.create_a_user_room = (req, res) => {
  const request = JSON.parse(JSON.stringify(req.body));
  (async () => {
    const userRoom = await User_Room.create(request);
    res.json({
      message: "User addded to room successfully",
      userRoom: {
        name: userRoom.name,
      },
    });
  })();
};

exports.list_all_users_in_room = (req, res) => {
  (async () => {
    const userRooms = await User_Room.findAll({
      where: {
        roomId: req.params.id,
      },
    });
    res.json(userRooms);
  })();
};

exports.delete_a_user_from_room = (req, res) => {
  (async () => {
    const userRoom = await User_Room.destroy({
      where: {
        UserId: req.params.id,
      },
    });
    res.json({
      message: "User deleted successfully from room",
    });
  })();
};

exports.delete_a_room = (req, res) => {
  (async () => {
    const userRoom = await User_Room.destroy({
      where: {
        roomId: req.params.id,
      },
    });
    res.json({
      message: "Room deleted successfully",
    });
  })();
};
