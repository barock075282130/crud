const { Schema, model, models } = require("mongoose")

const userSchema = new Schema({
    fname: {
        type: String,
        require: [true]
    },
    lname: {
        type: String,
        require: [true]
    },
    nickname: {
        type: String,
        require: [true]
    },
    bdate: {
        type: String,
        require: [true]
    },
    age: {
        type: Number,
        require: [true]
    },
    gender: {
        type: String,
        require: [true]
    }
})

const User = model("User", userSchema) || models.User
module.exports.User = User