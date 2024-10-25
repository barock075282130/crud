const router = require("express").Router();
const { Connected } = require("../utils/db");
const { DateFunc } = require("../utils/checkD");
const User = require("../models/user").User;

router.put("/", async (req, res) => {
  const { userId, fname, lname, nickname, bdate, age, gender } = await req.body;
  try {
    await Connected();

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json("user not found!");
    }
    console.log(user);
    user.fname = fname;
    user.lname = lname;
    user.nickname = nickname;
    user.bdate = bdate;
    user.age = age;
    user.gender = gender;

    await user.save();
    return res.status(200).json("data updated");
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
