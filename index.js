require('dotenv').config()

const app = require("./app")


app.listen(process.env.PORT, ()=>{
    console.log(`Launching connection on PORT ${process.env.PORT}`)
})
