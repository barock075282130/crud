const app = require("express")()
require("dotenv").config()
const bodyParser = require('body-parser')
const cors = require("cors")
app.use(bodyParser.urlencoded({
    extended: true,
    limit: "5mb"
}))
app.use(bodyParser.json())
app.use(cors())

const createUser = require('./route/createUser')
const updateUser = require('./route/updateUser')
const deleteUser = require('./route/deleteUser')
const getUser = require('./route/getUser')

app.use('/', getUser)
app.use('/create', createUser)
app.use('/edit', updateUser)
app.use('/delete', deleteUser)

module.exports = app