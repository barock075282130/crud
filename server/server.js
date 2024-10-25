const app = require('./app')

app.listen(process.env.PORT, () => {
    console.log(`server ${process.env.PORT}`)
})