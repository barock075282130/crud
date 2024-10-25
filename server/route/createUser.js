const router = require("express").Router();
const { Connected } = require("../utils/db");
const User = require("../models/user").User;
const { DateFunc } = require("../utils/checkD");

router.post("/", async (req, res) => {
  const { fname, lname, nickname, bdate, age, gender } = await req.body;
  console.log(fname, lname, nickname, bdate, age, gender)
  try {
    await Connected();

    const ageNum = Number(age);

    const createUser = new User({
      fname: fname,
      lname: lname,
      nickname: nickname,
      bdate: bdate,
      age: ageNum,
      gender: gender,
    });

    if (!createUser) {
      return res.status(400).json("create user failed");
    }
    await createUser.save();

    return res.status(200).json("create user success");
  } catch (error) {
    return res.status(500).json(error);
  }
});

module.exports = router;
