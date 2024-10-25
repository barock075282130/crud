const month = require("./month.json")

const DateFunc = (data) => {
    const dateObj = new Date(data)
    const mm = month[dateObj.getMonth()].name
    return `${dateObj.getDate()}/${mm}/${dateObj.getFullYear()+543}`
}

module.exports.DateFunc = DateFunc