const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User.js");
const validator = require("validator");

// Register
router.post("/register", async (req, res) => {
  try {
    const { username, email, name, surname, password, avatar } = req.body;
    const existingUser = await User.findOne({
      $or: [{ email: email }, { username: username }],
    });
    if (existingUser == null) {
      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Hatalı mail formatı" });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({
        username,
        email,
        name,
        surname,
        password: hashedPassword,
        avatar,
      });
      await newUser.save();
      return res.status(200).json(newUser);
    } else {
      return res
        .status(400)
        .json({ error: "E-posta adresi veya kullanıcı adı zaten kullanımda" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});

router.post("/login", async (req, res) => {
    try {
      const { usernameOrEmail, password } = req.body;
      console.log(req.body)
      const user = await User.findOne({
        $or: [{ email: usernameOrEmail }, { username: usernameOrEmail }],
      });
      console.log(user)
      if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign(
          {
            user: {
              username: user.username,
              name: user.name,
              surname: user.surname,
              email: user.email,
              id: user._id,
              roles: user.role,
            },
          },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "2h" }
        );
        return res.status(200).json({ accessToken });
      } else {
        return res
        .status(401)
        .json({ error: "Kullanıcı bulunamadı veya şifre hatalı" });
      }
    } catch (err) {
      res.status(500).json({ error: "Server error" });
    }
  });

module.exports = router;
