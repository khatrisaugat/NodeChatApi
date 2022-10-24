const Message = require("../../model/messageModel");

exports.create_a_message = (req, res) => {
  const request = JSON.parse(JSON.stringify(req.body));
  (async () => {
    const message = await Message.create(request);
    res.json({
      message: "Message created successfully",
      message: {
        message: message.message,
      },
    });
  })();
};

exports.list_messages_by_room = (req, res) => {
  (async () => {
    const messages = await Message.findAll({
      where: {
        room_id: req.params.id,
      },
    });
    res.json(messages);
  })();
};

exports.read_a_message = (req, res) => {
  (async () => {
    const message = await Message.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.json(message);
  })();
};

exports.update_a_message = (req, res) => {
  (async () => {
    const message = await Message.update(req.body, {
      where: {
        id: req.params.id,
      },
    }).then((message) => Message.findOne({ where: { id: req.params.id } }));
    res.json({
      message: "Message updated successfully",
      message: {
        message: message.message,
      },
    });
  })();
};

exports.delete_a_message = (req, res) => {
  (async () => {
    const message = await Message.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json({
      message: "Message deleted successfully",
    });
  })();
};
