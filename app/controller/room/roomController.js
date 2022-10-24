const Room = require("../../model/roomModel");

exports.create_a_room = (req, res) => {
  const request = JSON.parse(JSON.stringify(req.body));
  (async () => {
    const room = await Room.create(request);
    res.json({
      message: "Room created successfully",
      room: {
        name: room.name,
      },
    });
  })();
};

exports.list_all_rooms = (req, res) => {
  (async () => {
    const rooms = await Room.findAll();
    res.json(rooms);
  })();
};

exports.read_a_room = (req, res) => {
  (async () => {
    const room = await Room.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(room);
  })();
};

exports.update_a_room = (req, res) => {
  (async () => {
    const room = await Room.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((room) => Room.findOne({ where: { id: req.params.id } }));
    res.json({
      message: "Room updated successfully",
      room: {
        name: room.name,
      },
    });
  })();
};

exports.delete_a_room = (req, res) => {
  (async () => {
    const room = await Room.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Room deleted successfully",
    });
  })();
};
