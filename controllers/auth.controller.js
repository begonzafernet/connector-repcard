const { response } = require("express");
const bcrypt = require("bcryptjs");

const { User } = require("../models");
const { generateJWT } = require("../helpers/jwt");

const createUser = async (req, res = response) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({
        ok: false,
        msg: "This email is already registered",
      });
    }
    // Initialize user
    let userNew = await User.create(req.body);

    // Encript password
    const salt = bcrypt.genSaltSync();
    userNew.password = bcrypt.hashSync(password, salt);

    // Save user
    await userNew.save();

    // Generate JWT
    const token = await generateJWT(userNew.id, userNew.name);

    res.status(201).json({
      name: userNew.name,
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please, contact the admin",
    });
  }
};
const loginUser = async (req, res = response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({
        ok: false,
        msg: "User not exists with this email",
      });
    }
    // Confirmar los passwords
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).json({
        ok: false,
        msg: "Wrong password",
      });
    }

    // Generate JWT
    const token = await generateJWT(user.id, user.name);

    res.json({
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Please, contact the admin",
    });
  }
};

module.exports = {
  createUser,
  loginUser,
};
