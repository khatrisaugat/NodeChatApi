const User = require("../../model/userModel");
const bcrypt = require("bcrypt");
//register a user
exports.register_a_user = (req, res) => {
  (async () => {
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const user = await User.create(req.body);
    res.json({
      message: "User registered successfully",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  })();
};

//login a user
exports.login_a_user = (req, res) => {
  (async () => {
    const user = await User.findAll({
      where: {
        username: req.body.username,
      },
    });
    if (user) {
      if (await bcrypt.compare(req.body.password, user.password))
        res.json(user);
      else res.json({ message: "Username or password incorrect" });
    } else res.json({ message: "Username or password incorrect" });
  })();
};
