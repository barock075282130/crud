const { Connected } = require("../utils/db");
const router = require("express").Router();
const User = require("../models/user").User;

router.get("/", async (req, res) => {
  try {
    await Connected();

    const dbUser = await User.find();
    if (!dbUser) {
      return res.status(404).json("user not found");
    }
    return res.status(200).json(dbUser);
  } catch (error) {
    return res.status(500).json("err server");
  }
});

module.exports = router;
