const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(404).json({ msg: "Unauthorize User, Permission denied" });

  const token = authorization.replace("Bearer ", "");

  jwt.verify(token, "jwtSecret", async (err, payload) => {
    if (err)
      return res
        .status(401)
        .json({ msg: "Unauthorize User Permission denied" });

    const { _id } = payload;
    const userData = await User.findById(_id);
    req.user = userData;

    next();
  });
};

module.exports = auth;
