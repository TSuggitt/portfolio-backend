const express = require("express")
const cors = require("cors")

// middleware

const logRoutes = require("./middleware/logger")


//routers
const ProjectRouter = require("./routes/projects")


const app = express();

//app.use(cors)
app.use(logRoutes)
app.use(express.json())



app.get("/", (req, res)=>{
    res.json({
        "owner":"Thomas Suggitt",
        "welcome_message": "Welcome to my portfolio app - this is a personal API used for me to deposit projects into my portfolio database"
    })
})




// routes to use

app.use("/projects", ProjectRouter)


module.exports = app;
