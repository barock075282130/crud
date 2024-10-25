const mongoose = require("mongoose");

let connectDB = false;

const Connected = async () => {
  mongoose.set("strictQuery", true);
  if (connectDB) {
    return;
  }
  
  try {
    await mongoose.connect(process.env.MONGO_URI_LOCAL, {
      dbName: "test",
    });
    connectDB = true;
    console.log("db connect");
  } catch (error) {
    console.log("db err");
  }
};

module.exports.Connected = Connected;
