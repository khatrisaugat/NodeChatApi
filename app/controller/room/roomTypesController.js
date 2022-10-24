const RoomType = require("../../model/roomTypeModel");

exports.create_a_room_type = (req, res) => {
  const request = JSON.parse(JSON.stringify(req.body));
  (async () => {
    const roomType = await RoomType.create(request);
    res.json({
      message: "Room type created successfully",
      roomType: {
        name: roomType.name,
      },
    });
  })();
};

exports.list_all_room_types = (req, res) => {
  (async () => {
    const roomTypes = await RoomType.findAll();
    res.json(roomTypes);
  })();
};

exports.read_a_room_type = (req, res) => {
  (async () => {
    const roomType = await RoomType.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(roomType);
  })();
};

exports.update_a_room_type = (req, res) => {
  (async () => {
    const roomType = await RoomType.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((roomType) => RoomType.findOne({ where: { id: req.params.id } }));
    res.json({
      message: "Room type updated successfully",
      roomType: {
        name: roomType.name,
      },
    });
  })();
};

exports.delete_a_room_type = (req, res) => {
  (async () => {
    const roomType = await RoomType.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Room type deleted successfully",
    });
  })();
};
