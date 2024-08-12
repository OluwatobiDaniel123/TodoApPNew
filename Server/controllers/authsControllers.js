const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const Todos = require("../model/TodoModel");

const authControllers = {
  register: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;

      if ((!firstName && lastName, !email || !password))
        return res.status(400).json({ msg: "Please fill in all fields." });

      const user = await User.findOne({ email });
      if (user)
        return res.status(400).json({ msg: "This email already exists." });

      const hashPassword = await bcrypt.hash(password, 12);

      const newUser = User({
        firstName,
        lastName,
        email,
        password: hashPassword,
      });

      await newUser.save();

      newUser.password = undefined;

      return res
        .status(201)
        .json({ msg: "registration successful", user: newUser });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password)
        return res.status(400).json({ msg: "Please fill in all fields." });

      const user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "This email does not exists." });

      const confirmPassword = await bcrypt.compare(password, user.password);
      if (!confirmPassword)
        return res.status(400).json({ msg: "Invalid Password" });

      user.password = undefined;

      const token = jwt.sign({ _id: user._id }, "jwtSecret");

      return res.status(201).json({ msg: "login successful", token, user });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: err });
    }
  },

  getAllUsers: async (req, res) => {
    try {
      const users = await User.find().select("-password");

      return res.status(200).json({
        msg: "All Users",
        users,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },

  deleteUser: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findByIdAndDelete(id);

      return res.status(200).json({
        msg: "Deleted successfully...",
        user,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },

  getOneUser: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await User.findOne({ _id: userId }).select("-password");

      const todos = await Todos.find({ postedBy: userId }).populate(
        "postedBy",
        "-password"
      );

      return res.status(200).json({
        msg: "Single user...",
        user,
        todos,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: error });
    }
  },
};

module.exports = authControllers;
