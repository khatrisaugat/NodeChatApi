const passport = require("passport");

module.exports = function (app) {
  // var todoList = require('../controllers/todoListController');
  //   var UserAuth = require("../controller/appController");

  //   // Mvc Routes
  //   app.route("/users").get(UserAuth.list_all_users).post(UserAuth.create_a_User);

  //   app
  //     .route("/users/:id")
  //     .get(UserAuth.read_a_User)
  //     .put(UserAuth.update_a_User)
  //     .delete(UserAuth.delete_a_User);

  //   app.route("/users/login").post(UserAuth.login_a_user);
  const user = require("../controller/user/userController");
  console.log(passport.authenticate("jwt", { session: false }));
  app.route("/users").post(user.register_a_user);
  app.route("/users/login").post(user.login_a_user);
  app
    .route("/users/:id")
    .get(
      passport.authenticate("jwt", { session: false }),
      user.get_user_details
    );
  //   .get(passport.authenticate("jwt"), user.get_user_details);
  //route for room types
  const roomType = require("../controller/room/roomTypesController");
  app
    .route("/roomTypes")
    .get(roomType.list_all_room_types)
    .post(roomType.create_a_room_type);
  app
    .route("/roomTypes/:id")
    .get(roomType.read_a_room_type)
    .put(roomType.update_a_room_type)
    .delete(roomType.delete_a_room_type);

  //route for rooms
  const room = require("../controller/room/roomController");
  app.route("/rooms").get(room.list_all_rooms).post(room.create_a_room);
  app
    .route("/rooms/:id")
    .get(room.read_a_room)
    .put(room.update_a_room)
    .delete(room.delete_a_room);

  //route for messages
  const message = require("../controller/message/messageController");
  app.route("/room/messages/:id").get(message.list_messages_by_room);
  app.route("/messages").post(message.create_a_message);
  app
    .route("/messages/:id")
    .get(message.read_a_message)
    .put(message.update_a_message)
    .delete(message.delete_a_message);

  //routes for user_rooms
  const userRoom = require("../controller/room/userRoomController");
  app.route("/userRooms").post(userRoom.create_a_user_room);
  app
    .route("/userRooms/:id")
    .get(userRoom.list_all_users_in_room)
    .delete(userRoom.delete_a_room);
  app.route("/userInRoom/:id").delete(userRoom.delete_a_user_from_room);
};
