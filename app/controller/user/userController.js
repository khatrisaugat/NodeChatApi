const User = require("../../model/userModel");
const bcrypt = require("bcrypt");
//register a user
exports.register_a_user = (req, res) => {
  const request = JSON.parse(JSON.stringify(req.body));
  // console.log(req.body);
  (async () => {
    request.password = await bcrypt.hash(request.password, 10);
    // const request = JSON.parse(JSON.stringify(req.body));
    const user = await User.create(request);
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
  const request = JSON.parse(JSON.stringify(req.body));
  (async () => {
    const user = await User.findOne({
      where: {
        email: request.email,
      },
    });
    console.log(user.name);
    if (user) {
      if (await bcrypt.compare(request.password, user.password)) res.json(user);
      else res.json({ message: "Username or password incorrect" });
    } else res.json({ message: "Username or password incorrect" });
  })();
};
