const jwt = require("jsonwebtoken");
const User = require("../module/userSchema");
const bcrypt = require("bcrypt");

const userController = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(404).json("user not found !");
      }

      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (!isPasswordValid) {
        return res.status(400).json("password incorrect !");
      }
      const token = jwt.sign(email, "process.env.ACCESS_KEY");
      user.token = token;
      user.save();

      res.status(200).json({ user: user });
    } catch (error) {
      res.status(500).json(error);
    }
  },

  register: async (req, res) => {
    try {
      const { email, password, name } = req.body;

      const checkUser = await User.findOne({ email });
      if (checkUser) {
        return res.status(400).json("User already exists!");
      }

      const encriptPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        email,
        password: encriptPassword,
      });

      await newUser.save();
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },

  getUser: (req, res) => {},
};

module.exports = userController;
